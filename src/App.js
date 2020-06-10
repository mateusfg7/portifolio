import React from "react";

import Home from "./pages/Home";
import Routes from "./Routes";

import "./App.css";
import "./styles/wave-effect.css";

export default function App() {
  return (
    <div>
      <Home />
      <section className="wave-effect">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
        <div className="wave wave4" />
      </section>
      <main id="Main">
        <Routes />
      </main>
    </div>
  );
}
