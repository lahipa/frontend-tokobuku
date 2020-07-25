import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {
  LoginRegisterFormWrap,
  LoginRegisterFormTitle,
  FormContainer,
  FormPolicyWrap,
} from "./register";
import MainButton from "../components/button/mainButton";

class Login extends Component {
  render() {
    return (
      <>
        <LoginRegisterFormTitle>
          <div>
            <p>
              Cilsy Book Online Store adalah Toko Buku online dengan koleksi
              buku terbanyak di Indonesia.
            </p>
          </div>
        </LoginRegisterFormTitle>
        <LoginRegisterFormWrap>
          <FormContainer>
            <h3>Sign in</h3>
            <span>
              Belum punya akun? <Link to="/register">sign up</Link>
            </span>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <FormPolicyWrap>
                This page is protected by reCAPTCHA, and subject to the Google{" "}
                <Link>Privacy Policy</Link> and <Link>Terms of service</Link>.
              </FormPolicyWrap>
              <Form.Group>
                <MainButton title="Sign in" style={{ width: "100%" }} />
              </Form.Group>
            </Form>
          </FormContainer>
        </LoginRegisterFormWrap>
      </>
    );
  }
}

export default Login;
