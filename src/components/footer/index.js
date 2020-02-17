import React from 'react';

import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import icon from '../../services/fontawesome'

import './style.css'
import './style-hover.css'

const Footer = () => (
    <footer className="container-fluid pt-3 footer bg-dark text-light text-center">
        
        <h2 className="titulo">Redes Sociais</h2>
        <div className="container col-6 col-md-4 d-flex justify-content-around">
            <a href="https://www.facebook.com/mateusfelipefg7" target="_blank" className="face">{icon(faFacebookF)}</a>
            •
            <a href="https://twitter.com/mateusfg77" target="_blank" className="tt">{icon(faTwitter)}</a>
            •
            <a href="https://www.instagram.com/mateusfg7/" target="_blank" className="insta">{icon(faInstagram)}</a>
            •
            <a href="https://www.linkedin.com/in/mateus-felipe-a90030152/" target="_blank" className="in">{icon(faLinkedinIn)}</a>
        </div>
        <span className="copy bg-dark">&copy; Mateus Felipe Gonçalves</span>
    </footer>
);

export default Footer;