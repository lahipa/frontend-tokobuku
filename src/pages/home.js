import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import Card from "../components/card";
import CardBuku from "../components/card/cardBuku";
import Button from "../components/button/mainButton";

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
  padding-top: 213px;
  padding-bottom: 90px;
`;

const DataSectionButtonWrap = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionPenulisOfTheWeek = styled.section`
  padding-top: 90px;
  padding-bottom: 90px;
`;

const PenulisOfTheWeek = styled.div`
  display: grid;
  grid-gap: 24px;
  p {
    margin-bottom: 10px;
  }
  p.nama {
    font-size: 20px;
    font-weight: bold;
  }
  > .penulis_box {
    padding: 20px;
    background-color: #f5f6f8;
    position: relative;
    z-index: 5;
  }
  > .penulis_utama {
    height: 540px;
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }
  > .penulis_1 {
    grid-colum: 2 / span 1;
    grid-row: 1 / span 1;
  }
  > div > .nama_penulis {
    position: absolute;
    width: calc(100% - 40px);
    height: 90px;
    padding: 16px 28px;
    opacity: 0.6;
    background-color: #000;
    color: #fff;
    z-index: 6;
    bottom: 20px;
    left: 20px;
  }
  > div > ._utama {
    height: 120px;
    padding: 28px;
  }
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
            <DataSectionButtonWrap>
              <Button title="Lihat Semua Kategori" />
            </DataSectionButtonWrap>
          </Container>
        </SectionBukuTerlaris>
        <SectionPenulisOfTheWeek>
          <Container>
            <SectionTitle>
              <h3>PENULIS OF THE WEEK</h3>
              <span>Yuk kenal lebih jauh dengan penulis Favorit kalian</span>
            </SectionTitle>
            <PenulisOfTheWeek>
              <div className="penulis_box penulis_utama">
                1
                <div className="nama_penulis _utama">
                  <p className="nama">Marchella Febritisia Putri</p>
                  <span>Kamu terlalu banyak bercanda</span>
                </div>
              </div>
              <div className="penulis_box penulis_1">
                2
                <div className="nama_penulis">
                  <p className="nama">Ayu Utami</p>
                  <span>Saman</span>
                </div>
              </div>
              <div className="penulis_box penulis_2">
                3
                <div className="nama_penulis">
                  <p className="nama">Fiersa Besari</p>
                  <span>Garis Waktu</span>
                </div>
              </div>
            </PenulisOfTheWeek>
            <DataSectionButtonWrap>
              <Button title="Lihat Semua Kategori" />
            </DataSectionButtonWrap>
          </Container>
        </SectionPenulisOfTheWeek>
      </>
    );
  }
}
