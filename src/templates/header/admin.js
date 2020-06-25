import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  height: 96px;
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-image: linear-gradient(to bottom, #f6663f, #d34824 153%);
  color: #fff;
`;

const AdminHeader = () => {
  return (
    <HeaderWrap>
      <h4 style={{ margin: "0", fontSize: "18px", fontWeight: "light" }}>
        Header Admin
      </h4>
    </HeaderWrap>
  );
};

export default AdminHeader;
