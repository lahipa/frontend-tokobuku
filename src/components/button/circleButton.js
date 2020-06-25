import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f5f6f8;
  color: #000;
  font-size: 22px;
  border: none;
`;

export default function CircleButton(props) {
  const { title } = props;
  return <Button>{title}</Button>;
}
