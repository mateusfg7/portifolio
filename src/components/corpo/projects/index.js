import React, { useState, useEffect } from "react";

import "./style.css";

export default function Imagem() {
  const [repositories, setRepositories] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      "https://api.github.com/users/mateusfg7/repos"
    );
    const data = await response.json();

    if (response.status == 403) {
      setRepositories(data);
    } else if (response.status == 200) {
      setRepositories([
        data[10],
        data[27],
        data[13],
        data[3],
        data[9],
        data[28],
      ]);
    }
  }, []);

  return (
    <div className="main">
      <h2 id="projetos">Projetos</h2>
      {repositories.map((repo) => (
        <div className="project">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>{repo.language}</p>
          <a href={repo.svn_url} target="_blank">
            GitHub
          </a>
        </div>
      ))}
    </div>
  );
}
