import React from 'react';


import './style.css';
import './technologies.css';

export default function Imagem() {
  return (
    <div className="main">
      <h2 id="projetos">Principais projetos</h2>

      <div className="project">
        <h3>Box-CSS-Preview</h3>
        <p>Uma ferramenta feita com React JS para obter um preview em tempo real de bordas de um componente HTML e obter o código CSS respectivo a estilização escolhida.</p>
        <a href="https://mateusfg7.github.io/Box-CSS-Preview/" target="_blank" rel="noopener noreferrer" className="web-page-button">
          WebPage
        </a>
        <a href="https://github.com/mateusfg7/Box-CSS-Preview" target="_blank" rel="noopener noreferrer" className="source-code-button">
          Código Fonte
        </a>
      </div>

      <div className="project">
        <h3>textAnalysis</h3>
        <p>Programa feito em Python3 que realiza análise de texto usando recursos da API Algorithmia, como resumir textos, obter tags de acordo com o assunto do texto, obter frequencia de palavras, êtc.</p>
        <a href="https://github.com/mateusfg7/textAnalysis" target="_blank" rel="noopener noreferrer" className="source-code-button">
          Código Fonte
        </a>
      </div>
    </div>
  );
}
