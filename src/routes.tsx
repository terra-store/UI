import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import notfound from './error/404';
export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={notfound} />
  </Switch>;
