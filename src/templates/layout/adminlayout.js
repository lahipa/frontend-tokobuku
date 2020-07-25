import React, { Component } from "react";
import Header from "../header/admin";
import Footer from "../footer/admin";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
