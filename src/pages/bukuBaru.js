import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../templates/layout";

export default function BukuBaru(props) {
  return (
    <Layout>
      <Container>
        <div style={{ height: "300px" }}>
          <h1>Ini halaman buku baru</h1>
        </div>
      </Container>
    </Layout>
  );
}
