import React, { useEffect } from "react";
import { Container, Alert, Button } from "react-bootstrap";
import Layout from "../templates/layout";
import CardListItem from "../components/card/cardListItemCheckout";
import styled from "styled-components";
import numeral from "numeral";

import {
  getListCart,
  addToCart,
  updateOnCart,
  deleteFromCart,
} from "../store/actions/cart";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.addedItems,
    total: state.cartReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (data) => dispatch(addToCart(data)),
    getListItem: () => dispatch(getListCart()),
    removeItem: (id) => dispatch(deleteFromCart(id)),
    updateOnCart: (id, data) => dispatch(updateOnCart(id, data)),
  };
};

const SectionContent = styled.section`
  padding-top: 50px;
  padding-bottom: 90px;
`;

const SectionTitle = styled.div`
  margin-bottom: 40px;
  color: #000;
  > h4 {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
  }
  > span {
    color: #898989;
  }
`;

const PriceContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ListPriceComponentWrap = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ListPriceComponentItem = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  letter-spacing: 0.2rem;
`;

const Checkout = (props) => {
  const { items, total } = props;

  useEffect(() => {
    props.getListItem();
  }, []);

  const handleAdd = (id) => {
    props.addQuantity(id);
  };

  const handleRemove = (id) => {
    props.removeItem(id);
  };

  const handleSubtract = (id) => {
    props.subtractQuantity(id);
  };

  return (
    <Layout>
      <SectionContent>
        <Container>
          <SectionTitle>
            <h4>Keranjang Belanja</h4>
            <span>Belanja buku dengan metode pembayaran mudah</span>
          </SectionTitle>
          {items.length ? (
            ""
          ) : (
            <Alert variant="warning">
              <Alert.Heading>There is no data</Alert.Heading>
              <p style={{ lineHeight: "1.5" }}>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
            </Alert>
          )}

          {items.length
            ? items.map((val) => {
                return (
                  <CardListItem
                    dataItem={val}
                    doAddMore={handleAdd}
                    doSubstract={handleSubtract}
                    doRemove={handleRemove}
                  />
                );
              })
            : ""}
          {items.length ? (
            <PriceContainer>
              <ListPriceComponentWrap>
                <ListPriceComponentItem>
                  Total: <small>IDR </small>
                  <b>{numeral(total).format("0,0")}</b>
                </ListPriceComponentItem>
              </ListPriceComponentWrap>
              <Button size="lg">Checkout</Button>
            </PriceContainer>
          ) : (
            ""
          )}
        </Container>
      </SectionContent>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
