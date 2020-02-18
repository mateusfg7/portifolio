import React, { useState, useEffect } from 'react';

import './style.css';

export default function Imagem() {

    const [repositories, setRepositories] = useState([])

    useEffect(async () => {
        const response = await fetch('https://api.github.com/users/mateusfg7/repos')
        const data = await response.json()
        setRepositories([data[10], data[27], data[13], data[3], data[9], data[28]])
        
    }, [])

    return(
        <div className="main">
        
            <h2 id="projetos">Projetos</h2>
            {console.log(repositories)}
            { repositories.map(repo => (
                <div className="project">
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                    <p>{repo.language}</p>
                    <a href={repo.svn_url} target="_blank">GitHub</a>
                </div>
            )) }
        </div>
    )
}

/*
export default class Imagem extends Component {

    loadInfo = async () => {
        const response = await api.get('/users/mateusfg7/repos');
        this.setState({ dados: response.data });

        this.setState({ projeto1: this.state.dados[6]});
        this.setState({ projeto2: this.state.dados[17]});
        this.setState({ projeto3: this.state.dados[7]});
        this.setState({ projeto4: this.state.dados[13]});
        this.setState({ projeto5: this.state.dados[5]});
    };

    render() {
        return (
            <div className="main">

                <h2 id="projetos">Projetos</h2>

                <div className="project">
                    <h3>{this.state.projeto1.name}</h3>
                    <p>{this.state.projeto1.description}</p>
                    <p>{this.state.projeto1.language}</p>
                    <a href={this.state.projeto1.svn_url} target="_blank">GitHub</a>
                </div>

                <div className="project">
                    <h3>{this.state.projeto2.name}</h3>
                    <p>{this.state.projeto2.description}</p>
                    <p>{this.state.projeto2.language}</p>
                    <a href={this.state.projeto2.svn_url} target="_blank">GitHub</a>
                </div>

                <div className="project">
                    <h3>{this.state.projeto3.name}</h3>
                    <p>{this.state.projeto3.description}</p>
                    <p>{this.state.projeto3.language}</p>
                    <a href={this.state.projeto3.svn_url} target="_blank">GitHub</a>
                </div>

                <div className="project">
                    <h3>{this.state.projeto4.name}</h3>
                    <p>{this.state.projeto4.description}</p>
                    <p>{this.state.projeto4.language}</p>
                    <a href={this.state.projeto4.svn_url} target="_blank">GitHub</a>
                </div>

                <div className="project">
                    <h3>{this.state.projeto5.name}</h3>
                    <p>{this.state.projeto5.description}</p>
                    <p>{this.state.projeto5.language}</p>
                    <a href={this.state.projeto5.svn_url} target="_blank">GitHub</a>
                </div>

            </div>
        );
  }
}
*/