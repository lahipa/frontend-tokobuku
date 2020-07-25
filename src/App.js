import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import SemuaBuku from "./pages/listAllBook";
import BukuBaru from "./pages/listNewBook";
import DetailBuku from "./pages/detailBook";
import Register from "./pages/register";
import Login from "./pages/login";

import Checkout from "./pages/checkout";

import AdminLogin from "./admin/pages/login";
import AdminDashboard from "./admin/pages/dashboard";
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/semua-buku" component={SemuaBuku} />
          <Route exact path="/rincian-buku/:id" component={DetailBuku} />
          <Route path="/buku-baru" component={BukuBaru} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          <Route path="/checkout" component={Checkout} />

          <Route exact path="/imcoolmaster" component={AdminLogin} />
          <Route path="/imcoolmaster/dashboard" component={AdminDashboard} />
        </Switch>
      </>
    );
  }
}

export default App;
