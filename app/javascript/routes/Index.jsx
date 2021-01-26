import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Sketch from "../components/Sketch";

export default (
  <Router>
    <Switch>
      <Route path="/draw" component={Sketch} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);