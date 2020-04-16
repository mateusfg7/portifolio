import React from "react";

import "./style.css";

import { faFolderMinus } from "@fortawesome/free-solid-svg-icons";
import icon from "../../services/fontawesome";

const Header = () => (
  <header>
    <h1 id="headerTitle">
      Hi! I&apos;m Mateus Felipe
      <span id="piscar">|</span>
    </h1>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarMainToggler"
        aria-controls="navbarMainToggler"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <a className="navbar-brand" href="/">
        {icon(faFolderMinus)}
{' '}
Meu Portifólio
</a>

      <section className="collapse navbar-collapse" id="navbarMainToggler">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="#skills">
            Skills
          </a>
          <a className="nav-item nav-link" href="#formacao">
            Formação
          </a>
          <a className="nav-item nav-link" href="#projetos">
            Projetos
          </a>
          <a className="nav-item nav-link" href="#contato">
            Contato
          </a>
        </div>
      </section>
    </nav>
  </header>
);

export default Header;
