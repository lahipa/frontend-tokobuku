import React from "react";
import styled from "styled-components";
//import CardContent from "./cardBuku";

const CardWrap = styled.div`
  padding: 20px;
  padding-bottom: 0;
  height: 400px;
  position: relative;
  background-color: #f5f6f8;
`;

const CardImagesWrap = styled.div`
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  height: 329px;
  text-align: center;
  background-color: #fff;
  > div {
    padding: 0 10px;
    display: flex;
    align-items: center;
    position: absolute;
    background-color: #c02b02;
    color: #fff;
    opacity: 0.9;
    width: 100%;
    height: 40px;
    bottom: 0;
  }
`;

const CardTitle = styled.p`
  margin: 0;
  text-align: center;
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export default function Card(props) {
  const { dataCard } = props;

  return (
    <CardWrap>
      <CardImagesWrap>
        <img src={dataCard.images} alt="" />
        {dataCard.isSale === 1 ? <div>Sale 50% off</div> : ""}
      </CardImagesWrap>
      <CardTitle>{dataCard.title}</CardTitle>
    </CardWrap>
  );
}
