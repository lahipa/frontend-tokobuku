import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import numeral from "numeral";

const CardWrap = styled.div`
  padding: 20px;
  padding-bottom: 0;
  height: 520px;
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

export default function CardBuku(props) {
  const { dataCard, doAddToCart } = props;
  const [data, setData] = useState({});
  //console.log(dataCardContent);

  useEffect(() => {
    setData({
      id: dataCard._id,
      title: dataCard.title,
      price: dataCard.price,
    });
  }, []);

  const handleAddToCart = () => {
    console.log(data, "data added to cart");
    doAddToCart(data);
  };

  return (
    <CardWrap>
      <CardImagesWrap>
        <img
          src="https://ashmagautam.files.wordpress.com/2013/11/mcj038257400001.jpg"
          alt=""
          style={{ width: "100%" }}
        />
        {dataCard.isSale ? <div>Sale 50% off</div> : ""}
      </CardImagesWrap>
      <CardTitle>{dataCard.title}</CardTitle>
      <p className="card-bookAuthor">Author by {dataCard.author}</p>
      {dataCard.isSale === 1 ? (
        <p className="card-price-disc">{`Rp ${numeral(dataCard.harga).format(
          "0,0"
        )}`}</p>
      ) : (
        <p className="card-price">{`Rp ${numeral(dataCard.harga).format(
          "0,0"
        )}`}</p>
      )}
      {dataCard.isSale === 1 ? (
        <p className="card-price">{`Rp ${numeral(dataCard.harga).format(
          "0,0"
        )}`}</p>
      ) : (
        ""
      )}
      <div className="row">
        <div className="col-md-6" style={{ padding: "0 5px" }}>
          <Link
            className="btn btn-primary btn-sm btn-block"
            to={`/rincian-buku/${dataCard.id}`}
          >
            Lihat Buku
          </Link>
        </div>
        <div className="col-md-6" style={{ padding: "0 5px" }}>
          <Link
            className="btn btn-warning btn-sm btn-block"
            onClick={() => {
              handleAddToCart();
            }}
          >
            Add Cart
          </Link>
        </div>
      </div>
    </CardWrap>
  );
}
