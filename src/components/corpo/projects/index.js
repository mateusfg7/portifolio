import React from 'react';


import './style.css';
import './technologies.css';

export default function Imagem() {
  const projects = [
    {
      name: 'Box-CSS-Preview',
      description: 'Uma ferramenta feita com React JS para obter um preview em tempo real de bordas de um componente HTML e obter o código CSS respectivo a estilização escolhida.',
      url: 'https://github.com/mateusfg7/Box-CSS-Preview',
    },
    {
      name: 'textAnalysis',
      description: 'Programa feito em Python3 que realiza análise de texto usando recursos da API Algorithmia, como resumir textos, obter tags de acordo com o assunto do texto, obter frequencia de palavras, êtc.',
      url: 'https://github.com/mateusfg7/textAnalysis',
      technologies: ['Python3,', 'Algorithmia,', 'GoogleTrans'],
    },
  ];


  return (
    <div className="main">
      <h2 id="projetos">Projetos</h2>
      {
        projects.map((repositoryInfo) => (
          <div className="project">
            <h3>{repositoryInfo.name}</h3>
            <p>{repositoryInfo.description}</p>
            <a href={repositoryInfo.url} target="_blank" rel="noopener noreferrer">
              Código Fonte
            </a>
          </div>
        ))
      }
    </div>
  );
}
