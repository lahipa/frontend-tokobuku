import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./templates/header";
import Footer from "./templates/footer";

import Home from "./pages/home";
import BukuBaru from "./pages/bukuBaru";
import Register from "./pages/register";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/buku-baru" component={BukuBaru} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
