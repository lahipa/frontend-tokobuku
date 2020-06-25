import React, { useState, useEffect } from "react";
import Layout from "../../templates/layout/adminlayout";
import { Container, Col, Card, Form, Button } from "react-bootstrap";
import styled from "styled-components";

import { connect } from "react-redux";
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

const SectionDiv = styled.section`
  padding-top: 40px;
  padding-bottom: 90px;
`;

const SectionDivTitle = styled.h3`
  margin: 0;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
  line-height: 1.5;
  > span {
    display: block;
    font-size: 14px;
    font-weight: normal;
    color: #888;
    line-height: 1.5;
  }
`;

const AdminDashboard = (props) => {
  const [data, setData] = useState({});
  const [edit, setEdit] = useState(false);
  const { books } = props;

  console.log(data);

  useEffect(() => {
    props.getBook();
  }, []);

  const handleSubmit = (e) => {
    //e.preventDefault();
    props.addBook(data);
  };

  const handleUpdate = (id) => {
    props.updateBook(id, data);
    setEdit(false);
  };

  const handleForm = (e, formName) => {
    setData({ ...data, [formName]: e.target.value });
  };

  const handleDelete = (id) => {
    props.deleteBook(id);
  };

  const ShowBookData = () => {
    let i = 1;

    if (books.length === 0) {
      return (
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
      );
    }

    return (
      books &&
      books.map((val) => {
        return (
          <tr>
            <td style={{ verticalAlign: "middle" }}>{i++}</td>
            <td style={{ verticalAlign: "middle" }}>
              {edit ? (
                <>
                  <Form.Control
                    value={val.title}
                    onChange={(e) => handleForm(e, "title")}
                  />
                </>
              ) : (
                val.title
              )}
            </td>
            <td style={{ verticalAlign: "middle" }}>
              {edit ? (
                <>
                  <Form.Control
                    value={val.author}
                    onChange={(e) => handleForm(e, "author")}
                  />
                </>
              ) : (
                val.author
              )}
            </td>
            <td style={{ verticalAlign: "middle" }}>
              {edit ? (
                <>
                  <Form.Control
                    value={val.synopsis}
                    onChange={(e) => handleForm(e, "synopsis")}
                  />
                </>
              ) : (
                val.synopsis
              )}
            </td>
            <td style={{ verticalAlign: "middle" }}>
              {edit ? (
                <>
                  <Form.Control
                    value={val.price}
                    onChange={(e) => handleForm(e, "price")}
                  />
                </>
              ) : (
                val.price
              )}
            </td>
            <td style={{ verticalAlign: "middle" }}>
              {edit ? (
                <>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleUpdate(val._id)}
                  >
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setEdit(false);
                      setData({
                        title: val.title,
                        author: val.author,
                        price: val.price,
                        isSale: val.isSale,
                        synopsis: val.synopsis,
                      });
                    }}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setEdit(true)}
                    style={{ marginRight: "5px" }}
                  >
                    <i className="ion-edit"></i>
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(val._id)}
                  >
                    <i className="ion-android-delete"></i>
                  </Button>
                </>
              )}
            </td>
          </tr>
        );
      })
    );
  };

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
                    placeholder="Judul Buku"
                    onChange={(e) => handleForm(e, "title")}
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      placeholder="Penulis"
                      onChange={(e) => handleForm(e, "author")}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3">
                    <Form.Control
                      type="text"
                      placeholder="Harga"
                      onChange={(e) => handleForm(e, "price")}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="2">
                    <Form.Control
                      as="select"
                      onChange={(e) => handleForm(e, "isSale")}
                    >
                      <option value="0">No</option>
                      <option value="1">Yes</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="Harga"
                    onChange={(e) => handleForm(e, "synopsis")}
                  />
                </Form.Group>
                <Form.Group>
                  {/* <input
                    type="hidden"
                    name="images"
                    value="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
                  /> */}
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ marginRight: "10px" }}
                  >
                    Save
                  </Button>
                  <Button variant="secondary">Reset</Button>
                </Form.Group>
              </Form>
            </Card.Body>
            <table className="card-table table" style={{ marginBottom: "0" }}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Judul Buku</th>
                  <th>Author</th>
                  <th>Synopsis</th>
                  <th>Harga</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <ShowBookData />
              </tbody>
            </table>
          </Card>
        </Container>
      </SectionDiv>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
