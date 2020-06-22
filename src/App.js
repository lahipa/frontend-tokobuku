import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import BukuBaru from "./pages/bukuBaru";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/buku-baru" component={BukuBaru} />
    </Switch>
  );
};

export default App;
