import React from 'react';

import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFolderMinus } from '@fortawesome/free-solid-svg-icons'

const icon = iconName => <FontAwesomeIcon icon={iconName} />

const Header = () => (
    <header>
        <h1 id="headerTitle">Hi! I'm Mateus Felipe.</h1>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <a className="navbar-brand" href="#">{icon(faFolderMinus)} Meu Portifólio</a>
            
            <section className="collapse navbar-collapse" id="navbarMainToggler">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">Skills</a>
                    <a className="nav-item nav-link" href="#">Formação</a>
                    <a className="nav-item nav-link" href="#">Projetos</a>
                    <a className="nav-item nav-link" href="#">Contato</a>
                </div>
            </section>
            
        </nav>
    </header>
);

export default Header;