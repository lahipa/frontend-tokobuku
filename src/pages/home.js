import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import Card from "../components/card";
import CardBuku from "../components/card/cardBuku";
import Button from "../components/button";

const TaglinesHomeWrap = styled.div`
  background-color: #fff;
  position: relative;
`;
const TaglinesHome = styled.div`
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #898989;
  > * {
    margin: 0 15px;
  }
  > *:first-child {
    margin-left: 0;
  }
  > *:last-child {
    margin-right: 0;
  }
`;

const MainSlider = styled.div`
  background-color: #f5f6f8;
  width: 100%;
  height: 630px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
`;
const SectionTitle = styled.div`
  margin-bottom: 40px;
  text-align: center;
  color: #000;
  > h3 {
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }
  > span {
    color: #898989;
  }
`;

const SectionBukuTerlaris = styled.section`
  margin-top: 213px;
  margin-bottom: 90px;
`;

const DataBookButtonWrap = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBook: [
        {
          id: "dcc00123c",
          images: "SampleImg",
          title: "Card Title One",
          author: "Kate Hemilton",
          price: 300000,
          disc: 50,
          isSale: 1,
        },
        {
          id: "edd11023f",
          images: "SampleImg",
          title: "Card Title Two",
          author: "John Doe",
          price: 300000,
          disc: 0,
          isSale: 0,
        },
        {
          id: "ogd90757g",
          images: "SampleImg",
          title: "Card Title Three",
          author: "Mark Lewis",
          price: 300000,
          disc: 0,
          isSale: 0,
        },
        {
          id: "mui86727p",
          images: "SampleImg",
          title: "Card Title Four",
          author: "Marco Polo",
          price: 300000,
          disc: 0,
          isSale: 0,
        },
      ],
    };
  }

  render() {
    const { dataBook } = this.state;
    return (
      <>
        <TaglinesHomeWrap>
          <Container>
            <TaglinesHome>
              <span>Produk Original & Terjamin</span>
              <span>Gratis Pengiriman</span>
              <span>Gratis Pengembalian</span>
            </TaglinesHome>
          </Container>
        </TaglinesHomeWrap>

        <MainSlider>
          <h5>Slider Homes</h5>
        </MainSlider>

        <SectionBukuTerlaris>
          <Container>
            <SectionTitle>
              <h3>Buku Terlaris 2020</h3>
              <span>
                Temukan Buku Terlaris di Tahun 2020 dengan harga Terbaik
              </span>
            </SectionTitle>
            <Row>
              {dataBook.map((dataBookShow) => {
                return (
                  <Col lg={3}>
                    <Card dataCard={dataBookShow} />
                    <CardBuku dataCard={dataBookShow} />
                  </Col>
                );
              })}
            </Row>
            <DataBookButtonWrap>
              <Button title="Lihat Semua Kategori" />
            </DataBookButtonWrap>
          </Container>
        </SectionBukuTerlaris>
      </>
    );
  }
}
