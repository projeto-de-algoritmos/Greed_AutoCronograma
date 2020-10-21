import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Intro from "./pages/intro";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Intro} />
      </Switch>
    </BrowserRouter>
  );
}
