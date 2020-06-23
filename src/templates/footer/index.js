import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

const FooterWrap = styled.div`
  background-color: #ffffff;
`;

const FooterTop = styled.div`
  padding-top: 60px;
  padding-bottom: 35px;
  background-color: #f6663f;
  color: #fff;
  > div {
    display: flex;
    flex-direction: row;
  }
  > div > .middle-blank {
    flex: 1;
  }
`;

const FooterTopLeft = styled.div`
  flex: 1;
  > h1 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 50px;
  }
  > p {
    line-height: 2;
    letter-spacing: 0.38px;
    color: #f5f6f7;
  }
`;

const FooterTopRight = styled.div`
  flex: 1;
  > p {
    width: 255px;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: #f5f6f7;
  }
`;

const FooterBot = styled.div`
  background-color: #fff;
  > div {
    height: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  > div > * {
    flex: 1;
  }
  > div > *:first-child {
    display: flex;
    flex-direction: row;
  }
  > div > *:first-child > * {
    padding-right: 35px;
    font-size: 26px;
  }
  > div > *:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

export default function Footer() {
  return (
    <FooterWrap>
      <FooterTop>
        <Container>
          <FooterTopLeft>
            <h1>
              <b>Cil</b>sy
            </h1>
            <p>
              Cilsy Book Online Store adalah Toko Buku online dengan koleksi
              buku terbanyak di Indonesia. Anak perusahaan dari Cilsy One ini
              telah menyediakan jaringan toko buku Online. Didirikan pada
              tanggal 19 Maret 1992. Toko buku ini berawal dari toko buku kecil
              berukuran 25 meter persegi di daerah Jakarta Barat.
            </p>
          </FooterTopLeft>
          <div className="middle-blank">&nbsp;</div>
          <FooterTopRight>
            <p>Newsletter</p>
            <p>Dapatkan diskon s.d 50% dengan berlangganan Newsletter kami!</p>
            <InputGroup>
              <FormControl placeholder="Alamat E-mail" />
              <InputGroup.Append>
                <Button variant="secondary">Submit</Button>
              </InputGroup.Append>
            </InputGroup>
          </FooterTopRight>
        </Container>
      </FooterTop>
      <FooterBot>
        <Container>
          <div>
            <i className="ion-social-facebook"></i>
            <i className="ion-social-twitter"></i>
            <i className="ion-social-instagram"></i>
          </div>
          <p>Copyright © 2020</p>
        </Container>
      </FooterBot>
    </FooterWrap>
  );
}
