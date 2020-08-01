import React, { useState, useEffect } from "react";
import Layout from "../../templates/layout/adminlayout";
import { Container, Col, Card, Form, Button } from "react-bootstrap";
import { SectionDiv, SectionDivTitle } from "./styles";
import TableDataShow from "../components/categories";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { dataLogin } from "../../utils/globals";
import { getListKategori, addKategori } from "../../store/actions/categories";

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getListKategori()),
    addKategori: (data) => dispatch(addKategori(data)),
  };
};

const Category = (props) => {
  const [data, setData] = useState({});
  const { categories } = props;

  useEffect(() => {
    props.getCategories();
  }, []);

  if (!dataLogin || dataLogin.user.role !== "admin") {
    return <Redirect to="/imcoolmaster" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addKategori(data);
  };

  const handleForm = (e, formName) => {
    setData({ ...data, [formName]: e.target.value });
    console.log(data, "From kategori");
  };

  let i = 1;
  return (
    <Layout>
      <SectionDiv>
        <Container>
          <SectionDivTitle>
            Category <span>Create, Update and Delete data Categories.</span>
          </SectionDivTitle>
          <Card>
            <Card.Header>Categories Data</Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Control
                      type="text"
                      size="sm"
                      placeholder="Nama Kategori"
                      onChange={(e) => handleForm(e, "name")}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4">
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
                </Form.Row>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </SectionDiv>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
