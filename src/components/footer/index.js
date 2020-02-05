import React from 'react';

import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import icon from '../../services/fontawesome'
/* import './style.css'; */
import './fix-style.css'

const Footer = () => (
    <footer className="container-fluid pt-3 footer text-light bg-dark text-center">
        
        
        {/* <h1 className="titulo">Redes Sociais</h1> */}
        
        <container className="container col-6 col-lg-4 justify-content-around d-flex">
        <a href="https://www.facebook.com/mateusfelipefg7" target="_blank">{icon(faFacebookF)}</a>
        •
        <a href="https://twitter.com/mateusfg77" target="_blank">{icon(faTwitter)}</a>
        •
        <a href="https://www.instagram.com/mateusfg7/" target="_blank">{icon(faInstagram)}</a>
        •
        <a href="https://www.linkedin.com/in/mateus-felipe-a90030152/" target="_blank">{icon(faLinkedinIn)}</a>
        </container>
        
        {/* <p className="copy">&copy; Mateus Felipe Gonçalves</p> */}
    </footer>
);

export default Footer;