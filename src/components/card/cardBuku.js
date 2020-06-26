import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import numeral from "numeral";

const CardBodyWrap = styled.div`
  padding: 20px;
  padding-top: 5px;
  height: 120px;
  position: relative;
  background-color: #f5f6f8;
  > .card-bookAuthor {
    margin-bottom: 15px;
    text-align: center;
    line-height: 1.36;
    letter-spacing: 0.16px;
    color: #000000;
    opacity: 0.6;
  }
  > .card-price {
    margin-bottom: 10px;
    text-align: center;
    color: #000;
    font-weight: bold;
  }
  > .card-price-disc {
    margin-bottom: 10px;
    text-align: center;
    text-decoration: line-through;
    color: #898989;
  }
`;

export default function CardBuku(props) {
  const { dataCard } = props;
  //console.log(dataCardContent);

  return (
    <CardBodyWrap>
      <p className="card-bookAuthor">Author by {dataCard.author}</p>
      {dataCard.isSale === 1 ? (
        <p className="card-price-disc">{`Rp ${numeral(dataCard.price).format(
          "0,0"
        )}`}</p>
      ) : (
        <p className="card-price">{`Rp ${numeral(dataCard.price).format(
          "0,0"
        )}`}</p>
      )}
      {dataCard.isSale === 1 ? (
        <p className="card-price">{`Rp ${numeral(dataCard.price).format(
          "0,0"
        )}`}</p>
      ) : (
        ""
      )}
      <Link
        className="btn btn-primary btn-sm btn-block"
        to={`/rincian-buku/${dataCard._id}`}
      >
        Lihat Buku
      </Link>
    </CardBodyWrap>
  );
}
