
import React, { Component } from 'react';

import './style.css';

import whatsapp from './img/whatsapp.png';
import gmail from './img/gmail.png';

import api from '../../../services/api'


export default class Imagem extends Component {

    state = {
        avatar: []
    };

    componentDidMount() {
        this.loadInfo();
    }

    loadInfo = async () => {
        const response = await api.get('/search/users?q=mateusfg7');
        this.setState({ avatar: response.data.items[0].avatar_url });
    };

    render() {
        return (
            <div id="imagem">
                <div>
                    <img src={this.state.avatar} className="profile" alt="Foto Pessoal" /> <br/>
                    <div className="icon_section">
                        <a href="https://wa.me/5537998440073" target="_blank" title="+55 (37) 99844-0073"><img src={whatsapp} className="icon" alt="Whatsapp"/></a>
                        <a href="mailto:mateusfelipefg77@gmail.com" title="mateusfelipefg77@gmail.com"><img src={gmail} className="icon" alt="Gmail"/></a>
                    </div>
                </div>
            </div>
        );
  }
}