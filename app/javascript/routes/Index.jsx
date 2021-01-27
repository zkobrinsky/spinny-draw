import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import CreateSketch from "../components/CreateSketch";

export default (
  <Router>
    <Switch>
      <Route path="/draw" component={CreateSketch} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);