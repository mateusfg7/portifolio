import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DiJavascript1, DiReact } from "react-icons/di";
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

        <Link to="/projects/ecoleta#ecoleta" className="project-link ecoleta">
          <h4>Ecoleta</h4>
          <p>
            Aplicação back-end (NodeJS/Typescript) e front-end (Nunjucks)
            que ajuda a registrar e encontrar pontos de coleta
            de materiais recicláveis.
          </p>
          <span className="technologies">
            <IoLogoNodejs className="icon node" />
            <DiJavascript1 className="icon js" />
            <AiOutlineHtml5 className="icon html" />
            <RiCss3Line className="icon css" />
          </span>
        </Link>

        <Link to="/projects/be-the-hero#be-the-herp" className="project-link be-the-hero">
          <h4>Be The Hero</h4>
          <p>
            Aplicação back-end (NodeJS), front-end (React) e mobile (React-Native)
            que conecta pessoas que tem vontade de ajudar ONGS doando
            um valor para tratar algum caso específico.
          </p>
          <span className="technologies">
            <DiReact className="icon react" />
            <IoLogoNodejs className="icon node" />
            <DiJavascript1 className="icon js" />
            <AiOutlineHtml5 className="icon html" />
            <RiCss3Line className="icon css" />
          </span>
        </Link>
        <Link
          to="/projects/box-css-preview#box-css-preview"
          className="project-link box-css-preview"
        >
          <h4>Box-CSS-Preview</h4>
          <p>
            Aplicação front-end (React) que lhe permite editar
            as bordas de um elemento HTML e depois pegar os códigos CSS
            correspondentes ao estilo feito.
          </p>
          <span className="technologies">
            <DiReact className="icon react" />
            <DiJavascript1 className="icon js" />
            <AiOutlineHtml5 className="icon html" />
            <RiCss3Line className="icon css" />
          </span>
        </Link>
      </div>
    </div>
  );
}
