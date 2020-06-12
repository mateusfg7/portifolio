import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiCss3Line } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";

import Menu from "../../components/Menu";

import "./style.css";

export default function Projects() {
  useEffect(() => {
    const projectsButton = document.getElementById("projects-button");
    projectsButton.classList.add("selected");
  }, []);

  return (
    <div>
      <Menu />
      <h2 id="projects">Meus projetos</h2>
      <div className="projects">
        <Link
          to="/projects/box-css-preview#box-css-preview"
          className="project-link"
        >
          <article className="project">
            <h4>Box-CSS-Preview</h4>
            <p>
              Box-CSS-Preview é uma página feita em React que você pode editar
              as bordas de um elemento HTML e depois pegar os códigos CSS
              correspondente ao estilo feito.
            </p>
            <p>
              <span className="technologies">
                <FaReact className="icon react" />
                <DiJavascript1 className="icon js" />
                <AiOutlineHtml5 className="icon html" />
                <RiCss3Line className="icon css" />
              </span>
            </p>
          </article>
        </Link>

        <Link to="/projects/ecoleta#ecoleta" className="project-link">
          <article className="project">
            <h4>Ecoleta</h4>
            <p>
              Aplicação web que ajuda a registrar e encontrar pontos de coleta
              de materiais recicláveis.
            </p>
            <p>
              <span className="technologies">
                <IoLogoNodejs className="icon node" />
                <DiJavascript1 className="icon js" />
                <AiOutlineHtml5 className="icon html" />
                <RiCss3Line className="icon css" />
              </span>
            </p>
          </article>
        </Link>
      </div>
    </div>
  );
}
