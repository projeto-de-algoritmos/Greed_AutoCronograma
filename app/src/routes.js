import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Intro from "./pages/intro";
import Configuration from "./pages/configuration";
import Home from "./pages/home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/configuration" exact component={Configuration} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
