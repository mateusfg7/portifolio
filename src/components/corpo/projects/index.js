import React, { useState, useEffect } from 'react';

import './style.css';

export default function Imagem() {
  const projects = [
    {
      name: 'Box-CSS-Preview',
      description: 'A simple web page to see the preview of border css styles and get code',
      repo: 'https://github.com/mateusfg7/Box-CSS-Preview',
      technologies: ['JavaScript', 'ReactJS', 'CSS', 'Boostrap', 'HTML']
    }
  ]


  return (
    <div className="main">
      <h2 id="projetos">Projetos</h2>
      <div className="project">
        <h3>Box-CSS-Preview</h3>
        <p>A simple web page to see the preview of border css styles and get code</p>
        <p>JavaScript</p>
        <a href="https://github.com/mateusfg7/Box-CSS-Preview" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      {/* repositories.map((repo) => (
        <div className="project">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>{repo.language}</p>
          <a href={repo.svn_url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      )) */}
    </div>
  );
}
