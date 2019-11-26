
import React, { Component } from 'react';

import './style.css';

import api from '../../../services/api'


export default class Imagem extends Component {

    state = {
        dados: [],
        projeto1: [],
        projeto2: [],
        projeto3: [],
        projeto4: [],
        projeto5: [],
    };

    componentDidMount() {
        this.loadInfo();
    }

    loadInfo = async () => {
        const response = await api.get('/users/mateusfg7/repos');
        this.setState({ dados: response.data });
        
        console.log(this.state.dados)

        this.setState({ projeto1: this.state.dados[6]});
        this.setState({ projeto2: this.state.dados[17]});
        this.setState({ projeto3: this.state.dados[7]});
        this.setState({ projeto4: this.state.dados[13]});
        this.setState({ projeto5: this.state.dados[5]});
    };

    render() {
        return (
            <div className="main">

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