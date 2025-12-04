import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "@/src/pages/Home";
import About from "@/src/pages/About";

const App = () => (
  <Switch>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Redirect from="/*" to="/home" exact />
  </Switch>
);

export default App;
