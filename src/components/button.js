import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  padding: 0 35px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #f6663f;
  color: #f5f6f8;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 1.31;
  letter-spacing: 0.5px;
  border: none;
`;

export default function button(props) {
  const { title } = props;
  return <Button>{title}</Button>;
}
