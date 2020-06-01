import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Profile from "./components/Profile";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/meet-me/:first/:last" component={Profile} />
  </Switch>
);
