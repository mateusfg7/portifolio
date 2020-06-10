import React from "react";

import "./style.css";

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="/about#about" className="button" id="about-button">
            About
          </a>
        </li>
        <li>
          <a href="/projects#projects" className="button" id="projects-button">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
