import React from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import MainMenu from "../../components/mainmenu";

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
  text-align: right;
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
            <InputGroup className="mb-2">
              <FormControl id="inlineFormInputGroup" placeholder="Cari Buku" />
              <InputGroup.Append>
                <InputGroup.Text> = </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </HeaderSearch>
          <HeaderCheckout>(i)</HeaderCheckout>
        </HeaderMainSection>
      </Container>
      <MainMenu />
    </HeaderWrap>
  );
}
