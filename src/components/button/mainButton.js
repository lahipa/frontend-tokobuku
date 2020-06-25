import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #f6663f;
  color: #f5f6f8;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 1.31;
  letter-spacing: 0.5px;
  border: none;
`;

export default function MainButton(props) {
  const { title, style, type } = props;
  return (
    <Button style={style} type={type}>
      {title}
    </Button>
  );
}
