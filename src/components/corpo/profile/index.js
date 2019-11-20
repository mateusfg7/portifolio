import React from 'react';

import profile from './img/profile.jpg';
import whatsapp from './img/whatsapp.png';
import gmail from './img/gmail.png';

import './style.css';

// import { Container } from './styles';

const Imagem = () => (
    <div id="imagem">
        <div>
            <img src={profile} className="profile" alt="Foto Pessoal" /> <br/>
            <a href="https://wa.me/5537998440073" target="_blank" title="+55 (37) 99844-0073"><img src={whatsapp} className="icon" alt="Whatsapp"/></a>
            <a href="mailto:mateusfelipefg77@gmail.com" title="mateusfelipefg77@gmail.com"><img src={gmail} className="icon" alt="Gmail"/></a>
        </div>
    </div>
);

export default Imagem;
