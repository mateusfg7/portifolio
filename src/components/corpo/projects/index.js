import React from 'react';


import './style.css';
import './technologies.css';

export default function Imagem() {
  return (
    <div className="main">
      <h2 id="projetos">Principais projetos</h2>
      <section className="projects-area">
        <div className="project">
          <h3>Box-CSS-Preview</h3>
          <p>
            Uma ferramenta feita com React JS para obter um preview em tempo real de bordas de um
            componente HTML e obter o código CSS respectivo a estilização escolhida.
          </p>
          <a href="https://mateusfg7.github.io/Box-CSS-Preview/" target="_blank" rel="noopener noreferrer">
            <button className="web-page-button" type="button">
              WebPage
            </button>
          </a>
          <a href="https://github.com/mateusfg7/Box-CSS-Preview" target="_blank" rel="noopener noreferrer">
            <button className="source-code-button" type="button">
              Source Code
            </button>
          </a>
        </div>

        <div className="project">
          <h3>Be The Hero</h3>
          <p>
            Be The Hero é um projeto JS full stack, passando pelo back-end (Node),
            front-end (ReactJS), e mobile (React Native), feito na Semana
            OmniStack 11 da Rocketseat. Se trata de uma aplicação que
            conecta pessoas que tem vontade de
            ajudar ONGS doando um valor para tratar algum caso específico.
          </p>
          <a href="https://github.com/mateusfg7/BeTheHero-Backend" target="_blank" rel="noopener noreferrer">
            <button className="source-code-button" type="button">
              Back-End Source
            </button>
          </a>
          <a href="https://github.com/mateusfg7/BeTheHero-Frontend" target="_blank" rel="noopener noreferrer">
            <button className="source-code-button" type="button">
              Front-End Source
            </button>
          </a>
          <a href="https://github.com/mateusfg7/BeTheHero-Mobile" target="_blank" rel="noopener noreferrer">
            <button className="source-code-button" type="button">
              Mobile Source
            </button>
          </a>
        </div>

        <div className="project">
          <h3>textAnalysis</h3>
          <p>
            Programa feito em Python3 que realiza análise de texto
            usando recursos da API Algorithmia, como resumir textos,
            obter tags de acordo com o assunto do texto, obter frequencia de palavras, êtc.
          </p>
          <a href="https://github.com/mateusfg7/textAnalysis" target="_blank" rel="noopener noreferrer">
            <button className="source-code-button" type="button">
              Source Code
            </button>
          </a>
        </div>

        <div className="project">
          <h3>Geometry Math</h3>
          <p>
            Programa, feito com Python3, que facilita o
            cálculo de algumas equações de geometria plana.
          </p>
          <a href="https://github.com/mateusfg7/Geometry-Math" target="_blank" rel="noopener noreferrer">
            <button className="source-code-button" type="button">
              Source Code
            </button>
          </a>
        </div>
      </section>

    </div>
  );
}
