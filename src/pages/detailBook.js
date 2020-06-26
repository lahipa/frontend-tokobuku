import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../templates/layout";

export default function DetailBook(props) {
  const { match } = props;
  return (
    <Layout>
      <Container>
        <div style={{ height: "300px" }}>
          <h1>Ini halaman {match.params.id}</h1>
        </div>
      </Container>
    </Layout>
  );
}
