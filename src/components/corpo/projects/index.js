import React from 'react';


import './style.css';
import './technologies.css';

export default function Imagem() {
  const projects = [
    {
      name: 'Box-CSS-Preview',
      description: 'A simple web page to see the preview of border css styles and get code',
      url: 'https://github.com/mateusfg7/Box-CSS-Preview',
      technologies: ['JavaScript', 'ReactJS', 'CSS3', 'Boostrap', 'HTML'],
    },
    {
      name: 'textAnalysis',
      description: 'Programa em python que realisa análise em texto usando recursos da API Algorithmia.',
      url: 'https://github.com/mateusfg7/textAnalysis',
      technologies: ['Python3', 'Algorithmia', 'GoogleTrans'],
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
            <p>
              {
                repositoryInfo.technologies.map((technology) => (
                  <span className={technology}>{technology}</span>
                ))
              }
            </p>
            <a href={repositoryInfo.url} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))
      }
    </div>
  );
}
