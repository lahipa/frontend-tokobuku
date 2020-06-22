import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainNavWrap = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f5f6f8;
  position: relative;
  z-index: 10;
`;

const MainNav = styled.div`
  display: inline-block;
  margin: 0;
  margin-right: 100px;
  padding: 0;
  > * {
    margin: 0 10px;
    color: #000;
    text-transform: uppercase;
  }
  > *:first-child {
    margin-left: 0;
  }
  > *:last-child {
    margin-right: 0;
  }
  > *:hover {
    text-decoration: none;
    color: #888;
  }
`;

export default function MainMenu() {
  return (
    <MainNavWrap>
      <Container>
        <MainNav>
          <Link to="/">Semua Koleksi</Link>
          <Link to="/buku-baru">Buku Baru</Link>
          <Link to="/">Buku Pilihan</Link>
          <Link to="/">National Beset Seller</Link>
          <Link to="/">Buku Import</Link>
        </MainNav>
        <Link to="#">SALE</Link>
      </Container>
    </MainNavWrap>
  );
}
