import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Projects from "./pages/Projects";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}
