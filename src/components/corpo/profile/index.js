
import React, { Component } from 'react';

import './style.css';

import profile from './img/profile.jpg';
import whatsapp from './img/whatsapp.png';
import gmail from './img/gmail.png';


export default class Imagem extends Component {

    componentDidMount() {
        this.loadInfo();
    }

    render() {
        return (
            <div id="imagem">
                <div>
                    <img src={profile} className="profile" alt="Foto Pessoal" /> <br/>
                    <div className="icon_section">
                        <a href="https://wa.me/5537998440073" target="_blank" title="+55 (37) 99844-0073"><img src={whatsapp} className="icon" alt="Whatsapp"/></a>
                        <a href="mailto:mateusfelipefg77@gmail.com" title="mateusfelipefg77@gmail.com"><img src={gmail} className="icon" alt="Gmail"/></a>
                    </div>
                </div>
            </div>
        );
  }
}