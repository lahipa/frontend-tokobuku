import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainMenu from "../../components/mainmenu";
import CheckoutButton from "../../components/button/circleButton";

import "../asset/ionicons/css/ionicons.min.css";

const HeaderWrap = styled.div`
  background-color: #ffffff;
`;

const HeaderMainSection = styled.div`
  display: flex;
  position: relative;
  height: 100px;
  align-items: center;
`;

const Logo = styled.div`
  flex: 3;
  position: relative;
  > h1 {
    margin: 0;
    font-size: 50px;
  }
  > h1 > b {
    color: #f6663f;
  }
`;

const HeaderSearch = styled.div`
  flex: 2;
  postition: relative;
`;

const HeaderCheckout = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

export default function Header() {
  return (
    <HeaderWrap>
      <Container>
        <HeaderMainSection>
          <Logo>
            <h1>
              <b>Cil</b>sy
            </h1>
          </Logo>
          <HeaderSearch>
            <InputGroup>
              <FormControl id="inlineFormInputGroup" placeholder="Cari Buku" />
              <InputGroup.Append>
                <Button variant="secondary">
                  <i className="ion-ios-search-strong"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </HeaderSearch>
          <HeaderCheckout>
            <Link to="/register">
              <CheckoutButton title={<i className="icon ion-bag"></i>} />
            </Link>
          </HeaderCheckout>
        </HeaderMainSection>
      </Container>
      <MainMenu />
    </HeaderWrap>
  );
}
