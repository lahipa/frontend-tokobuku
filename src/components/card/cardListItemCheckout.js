import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import styled from "styled-components";
import numeral from "numeral";

const ListItemWrap = styled.div`
  margin-top: -1px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  position: relative;
`;

const ImagesListItemContainer = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const ContentListItemContainer = styled.div`
  flex: 4;
  padding-left: 40px;
  > .item__names {
    font-size: 20px;
  }
  > .item__author {
    margin-bottom: 10px;
    color: #888;
  }
  > .item__desc {
    margin-bottom: 10px;
    line-height: 1.5;
  }
  > .item__price {
    margin-bottom: 0;
    font-size: 18px;
  }
`;

const cardListItemCheckout = (props) => {
  const { dataItem, doAddMore, doSubstract, doRemove } = props;

  const handleAdd = (id) => {
    doAddMore(id);
  };

  const handleRemove = (id) => {
    doRemove(id);
  };

  const handleSubtract = (id) => {
    doSubstract(id);
  };

  return (
    <ListItemWrap>
      <ImagesListItemContainer>
        <img
          src="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </ImagesListItemContainer>
      <ContentListItemContainer>
        <h4 className="item__names">{dataItem.title}</h4>
        <p className="item__author">Author: {dataItem.authorName}</p>
        <p className="item__desc">
          <b>Synopsis: </b>
          <br />
          {dataItem.synopsis}
        </p>
        <ButtonGroup className="mb-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              handleSubtract(dataItem.id);
            }}
          >
            -
          </Button>
          <Button variant="secondary" disabled>
            {dataItem.quantity}
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              handleAdd(dataItem.id);
            }}
          >
            +
          </Button>
        </ButtonGroup>
        <h5 className="item__price">
          <small>IDR </small>
          <b>{numeral(dataItem.price).format("0,0")}</b>
        </h5>
      </ContentListItemContainer>
    </ListItemWrap>
  );
};

export default cardListItemCheckout;
