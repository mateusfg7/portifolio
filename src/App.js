import React from "react";

import Home from "./components/Home";
import Routes from "./Routes";

import "./App.css";
import "./styles/navbar-menu.css";
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
        <nav className="menu">
          <ul>
            <li>
              <a href="/about#about" className="button" id="about-button">
                About
              </a>
            </li>
            <li>
              <a
                href="/projects#projects"
                className="button"
                id="projects-button"
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <div className="pages">
          <Routes />
        </div>
      </main>
    </div>
  );
}
