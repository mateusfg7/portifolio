import React from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

import "./style.css";

// eslint-disable-next-line react/prop-types
export default function Return() {
  return (
    <nav className="menu">
      <Link className="return-button" id="return" to="/projects#projects">
        <span className="arrow-back">
          <TiArrowBack />
        </span>
        Voltar
      </Link>
    </nav>
  );
}
