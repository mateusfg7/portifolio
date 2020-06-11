import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./pages/About";
import Projects from "./pages/Projects";

import BoxCssPreview from "./pages/Projects/projects/box-css-preview";
import Ecoleta from "./pages/Projects/projects/ecoleta";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/box-css-preview" component={BoxCssPreview} />
        <Route path="/projects/ecoleta" component={Ecoleta} />
      </Switch>
    </BrowserRouter>
  );
}
