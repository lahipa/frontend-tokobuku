import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import BukuBaru from "./pages/bukuBaru";
import Register from "./pages/register";
import Login from "./pages/login";

import AdminLogin from "./admin/pages/login";
import AdminDashboard from "./admin/pages/dashboard";
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/buku-baru" component={BukuBaru} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          <Route exact path="/imcoolmaster" component={AdminLogin} />
          <Route path="/imcoolmaster/dashboard" component={AdminDashboard} />
        </Switch>
      </>
    );
  }
}

export default App;
