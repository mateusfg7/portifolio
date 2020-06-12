import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

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
                <FontAwesomeIcon className="icon react" icon={faReact} />
                <FontAwesomeIcon className="icon js" icon={faJs} />
                <FontAwesomeIcon className="icon html" icon={faHtml5} />
                <FontAwesomeIcon className="icon css" icon={faCss3} />
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
                <FontAwesomeIcon className="icon node" icon={faNodeJs} />
                <FontAwesomeIcon className="icon js" icon={faJs} />
                <FontAwesomeIcon className="icon html" icon={faHtml5} />
                <FontAwesomeIcon className="icon css" icon={faCss3} />
              </span>
            </p>
          </article>
        </Link>
      </div>
    </div>
  );
}
