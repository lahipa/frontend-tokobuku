import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./auth/login";
import Register from "./auth/register";
import SemuaBuku from "./pages/listAllBook";
import BukuBaru from "./pages/listNewBook";
import DetailBuku from "./pages/detailBook";
import Checkout from "./pages/checkout";

import AdminLogin from "./admin/auth/login";
import AdminDashboard from "./admin/views/dashboard";
import AdminBookList from "./admin/views/books";
//import AdminBookListAdd from "./admin/views/books/addBooks";
import AdminBookCategory from "./admin/views/categories";
import AdminListOrders from "./admin/views/orders";
import Customers from "./admin/views/usersCustomers";
import Admins from "./admin/views/usersAdmins";

class App extends Component {
  render() {
    return (
      <Fragment>
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
          <Route path="/imcoolmaster/books-list" component={AdminBookList} />
          {/* <Route
            path="/imcoolmaster/books-list/add"
            component={AdminBookListAdd}
          /> */}
          <Route
            path="/imcoolmaster/books-category"
            component={AdminBookCategory}
          />
          <Route path="/imcoolmaster/orders" component={AdminListOrders} />
          <Route path="/imcoolmaster/customers" component={Customers} />
          <Route path="/imcoolmaster/admins" component={Admins} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
