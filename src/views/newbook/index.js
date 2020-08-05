import React from "react";
import Layout from "../../templates/layout";
import { Container } from "@material-ui/core";

export default function index(props) {
  return (
    <Layout>
      <Container>
        <div style={{ height: "300px" }}>
          <h2>Ini halaman buku baru</h2>
        </div>
      </Container>
    </Layout>
  );
}
