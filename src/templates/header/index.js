import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainMenu from "../../components/mainmenu";
import CheckoutButton from "../../components/button/circleButton";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.addedItems,
  };
};

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
  > *:hover {
    text-decoration: none;
  }
  > * > h1 {
    margin: 0;
    font-size: 50px;
    color: #888;
  }
  > * > h1 > b {
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
  > .items__selected {
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    top: -5px;
    right: 0;
    background-color: red;
    color: #fff;
  }
`;

const Header = (props) => {
  const { items } = props;

  return (
    <HeaderWrap>
      <Container>
        <HeaderMainSection>
          <Logo>
            <Link to="/">
              <h1>
                <b>Cil</b>sy
              </h1>
            </Link>
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
            {items.length ? <span class="items__selected">{items.length}</span> : ""}
            <Link to="/checkout" style={{ textAlign: "center" }}>
              <CheckoutButton title={<i className="icon ion-bag"></i>} />
            </Link>
          </HeaderCheckout>
        </HeaderMainSection>
      </Container>
      <MainMenu />
    </HeaderWrap>
  );
}

export default connect(mapStateToProps, null)(Header);