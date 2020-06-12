import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link className="button" id="about-button" to="/about#about">
            About
          </Link>
        </li>
        <li>
          <Link className="button" id="projects-button" to="/projects#projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
