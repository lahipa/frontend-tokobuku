import React, { useState, useEffect } from "react";
import Layout from "../../templates/layout/adminlayout";
import { Container, Col, Card, Form, Button } from "react-bootstrap";
import { SectionDiv, SectionDivTitle } from "./styles";
import TableDataShow from "../components/books";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { dataLogin } from "../../utils/globals";
import {
  getListBook,
  addBook,
  updateBook,
  deleteBook,
} from "../../store/actions/books";

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBook: () => dispatch(getListBook()),
    addBook: (data) => dispatch(addBook(data)),
    updateBook: (id, data) => dispatch(updateBook(id, data)),
    deleteBook: (id) => dispatch(deleteBook(id)),
  };
};

const AdminDashboard = (props) => {
  const [data, setData] = useState({});
  const { books } = props;

  useEffect(() => {
    props.getBook();
  }, []);

  if (!dataLogin) {
    return <Redirect to="/imcoolmaster" />;
  }

  const handleSubmit = () => {
    props.addBook(data);
  };

  const handleUpdate = (id, updateData) => {
    props.updateBook(id, updateData);
  };

  const handleDelete = (id) => {
    props.deleteBook(id);
  };

  const handleForm = (e, formName) => {
    setData({ ...data, [formName]: e.target.value });
    //console.log(data, "From dashboard");
  };

  let i = 1;
  return (
    <Layout>
      <SectionDiv>
        <Container>
          <SectionDivTitle>
            Dashboard <span>Create, Update and Delete data Books.</span>
          </SectionDivTitle>
          <Card>
            <Card.Header>Books Data</Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    size="sm"
                    placeholder="Judul Buku"
                    onChange={(e) => handleForm(e, "title")}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    size="sm"
                    placeholder="Synopsis"
                    onChange={(e) => handleForm(e, "synopsis")}
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} md="3">
                    <Form.Control
                      type="text"
                      size="sm"
                      placeholder="Harga"
                      onChange={(e) => handleForm(e, "price")}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                    <Form.Control
                      type="text"
                      size="sm"
                      placeholder="Penulis"
                      onChange={(e) => handleForm(e, "author")}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Control
                      type="text"
                      size="sm"
                      placeholder="ISBN"
                      onChange={(e) => handleForm(e, "isbn_no")}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="2">
                    <Form.Control
                      as="select"
                      size="sm"
                      onChange={(e) => handleForm(e, "book_status")}
                    >
                      <option>Status</option>
                      <option value="FOR_SELL">For Sell</option>
                      <option value="NOT_FOR_SELL">Not for Sell</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  {/* <input
                    type="hidden"
                    name="images"
                    value="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
                  /> */}
                  <Button
                    variant="primary"
                    type="submit"
                    size="sm"
                    style={{ marginRight: "5px" }}
                  >
                    Save
                  </Button>
                  <Button variant="secondary" type="reset" size="sm">
                    Reset
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
            <table className="card-table table" style={{ marginBottom: "0" }}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Judul Buku</th>
                  <th>Author</th>
                  <th style={{ width: "400px" }}>Synopsis</th>
                  <th>Sale</th>
                  <th>Harga</th>
                  <th style={{ width: "100px" }}>#</th>
                </tr>
              </thead>
              <tbody>
                {books.rows && books.rows.length === 0 ? (
                  <tr>
                    <td
                      colspan="6"
                      style={{
                        height: "80px",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      <h5 style={{ fontSize: "16px", color: "#888" }}>
                        <i>Belum ada data tersimpan!</i>
                      </h5>
                    </td>
                  </tr>
                ) : (
                  books.rows &&
                  books.rows.map((val) => {
                    return (
                      <TableDataShow
                        no={i++}
                        key={val.id}
                        booksData={val}
                        doUpdate={handleUpdate}
                        doDelete={handleDelete}
                      />
                    );
                  })
                )}
              </tbody>
            </table>
          </Card>
        </Container>
      </SectionDiv>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
