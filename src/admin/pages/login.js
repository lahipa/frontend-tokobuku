import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import { getListUser } from "../../store/actions/users";
import { validate } from "numeral";

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getListUser()),
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { users } = props;

  useEffect(() => {
    props.getUser();
  }, []);

  const onSubmitLogin = (e) => {
    //e.preventDefault();
    // if (users.lenght !== 0) {
    //   users &&
    //     users.map((val) => {
    //       if (email === val.email && password === val.password) {
    //         alert("Berhasil login");
    //         document.getElementById("login").action = "/imcoolmaster/dashboard";
    //       } else {
    //         alert("Damm! kamu gagal login");
    //       }
    //     });
    // } else {
    //   alert("Damm! kamu gagal login");
    // }

    if (email === "email@gmail.com" && password === "123456") {
      window.localStorage.setItem("token", "blablabalblabal");
      return <Redirect to="/imcoolmaster/dashboard" />;
      //document.getElementById("login").action = "/imcoolmaster/dashboard";
    } else {
      alert("anda gagal login");
    }
  };

  return (
    <>
      <AdminLoginWrap>
        <FormLoginContainer>
          <Form id="login" onSubmit={(e) => onSubmitLogin(e)}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
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
