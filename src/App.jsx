import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "@/src/pages/Home";
import About from "@/src/pages/About";
import PageWithModal from "@/src/pages/PageWithModal";
import { UsernameContext } from "@/src/components/UsernameModal";

const App = () => {
  const [usernameContext, setUsernameContext] = useState({ open: false, resolve: () => null, setContext: () => null });

  return (
    <UsernameContext.Provider value={{ ...usernameContext, setContext: setUsernameContext }}>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/page-with-modal">
          <PageWithModal />
        </Route>
        <Redirect from="/*" to="/home" exact />
      </Switch>
    </UsernameContext.Provider>
  );
};

export default App;
