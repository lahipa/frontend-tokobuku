import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { dataLogin } from "../../utils/globals";
import { loginUser } from "../../store/actions/users";
import { validate } from "numeral";

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    isLogin: state.userReducer.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(loginUser(data)),
  };
};

const AdminLoginWrap = styled.div`
  padding-top: 35px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FormLoginContainer = styled.div`
  width: 460px;
  padding: 30px 40px;
  border-radius: 8px;
  border: solid 1px #ddd;
  background-color: #ffffff;
`;

const AdminLogin = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [goto, setGoto] = useState(false);
  const { user, isLogin } = props;
  props.login({
    username,
    password,
  });

  // useEffect(() => {
  //   if (dataLogin || dataLogin.role == "admin") {
  //       window.location.href = "/imcoolmaster/dashboard";
  //   }
  // }, []);

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(isLogin);
  };

  if (isLogin && user.role === "admin") {
    setGoto(true);
  }

  // if (isLogin && user.role === "admin") {
  //   console.log(isLogin, "ini status login");
  //   return <Redirect to="/imcoolmaster/dashboard" />;
  // }

  return (
    <>
      {goto ? <Redirect to="/imcoolmaster/dashboard" /> : ""}
      <AdminLoginWrap>
        <FormLoginContainer>
          <Form id="login" onSubmit={(e) => onSubmitLogin(e)}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="primary" block>
                Sign Up
              </Button>
            </Form.Group>
          </Form>
        </FormLoginContainer>
      </AdminLoginWrap>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
