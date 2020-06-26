import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  height: 60px;
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #888;
  > p {
    font-size: 12px;
    margin: 0;
  }
`;

const AdminFooter = () => {
  return (
    <FooterWrap>
      <p>Crafted with love in Pacitan &copy; 2020</p>
    </FooterWrap>
  );
};

export default AdminFooter;
