import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "@/src/pages/Home";

const App = () => (
  <Switch>
    <Route path="/home">
      <Home />
    </Route>
    <Redirect from="/*" to="/home" exact />
  </Switch>
);

export default App;
