import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import MainButton from "../components/button/mainButton";
import styled from "styled-components";
import Layout from "../templates/layout";

import { connect } from "react-redux";
import { addUser } from "../store/actions/users";

const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(addUser(data)),
  };
};

export const LoginRegisterFormWrap = styled.section`
  padding-top: 35px;
  margin-bottom: 120px;
  display: grid;
  justify-content: center;
`;

export const LoginRegisterFormTitle = styled.div`
  padding-top: 35px;
  display: flex;
  justify-content: center;
  color: #aaabab;
  > div {
    padding: 0 20px;
    width: 540px;
    text-align: center;
  }
  & p {
    margin: 0;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 1.38;
  }
`;

export const FormContainer = styled.div`
  width: 460px;
  padding: 30px 40px;
  border-radius: 8px;
  border: solid 1px #707070;
  background-color: #ffffff;
  > h3 {
    font-size: 24px;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 6px;
  }
  > span {
    display: block;
    margin-bottom: 30px;
    font-size: 12px;
    color: #aaabab;
  }
  a {
    color: #f6663f;
  }
`;

export const FormPolicyWrap = styled.div`
  width: 344px;
  margin-top: 18px;
  margin-bottom: 44px;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.38px;
  color: #aaabab;
`;
const Register = (props) => {
  const [data, setData] = useState({});
  console.log(data);

  const onSubmitRegistrasi = (e) => {
    //e.preventDefault();
    props.register(data);
  };

  const handleRegistrasi = (e, formName) => {
    setData({ ...data, [formName]: e.target.value });
  };

  return (
    <Layout>
      <LoginRegisterFormTitle>
        <div>
          <p>
            Cilsy Book Online Store adalah Toko Buku online dengan koleksi buku
            terbanyak di Indonesia.
          </p>
        </div>
      </LoginRegisterFormTitle>
      <LoginRegisterFormWrap>
        <FormContainer>
          <h3>Sign up</h3>
          <span>
            atau <Link to="/login">sign in</Link>
          </span>
          <Form onSubmit={(e) => onSubmitRegistrasi(e)}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Nama Depan"
                onChange={(e) => handleRegistrasi(e, "firstName")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Nama Belakang"
                onChange={(e) => handleRegistrasi(e, "lastName")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => handleRegistrasi(e, "email")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => handleRegistrasi(e, "password")}
              />
            </Form.Group>
            <FormPolicyWrap>
              This page is protected by reCAPTCHA, and subject to the Google{" "}
              <Link>Privacy Policy</Link> and <Link>Terms of service</Link>.
            </FormPolicyWrap>
            <Form.Group>
              <Button type="submit" variant="primary" block>
                Sign Up
              </Button>
            </Form.Group>
            <Form.Group>
              <Button variant="outline-secondary" block>
                Sign up With Google
              </Button>
            </Form.Group>
          </Form>
        </FormContainer>
      </LoginRegisterFormWrap>
    </Layout>
  );
};

export default connect(null, mapDispatchToProps)(Register);
