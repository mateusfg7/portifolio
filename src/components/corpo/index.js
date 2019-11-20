import React from 'react';

import './style.css';

import Imagem from './profile';



const Corpo = () => (
    <div id="corpo">
        <Imagem />
        <h2>Estudos</h2>
        
        <h3>Acadêmicos</h3>
        <p>Ensino Fundamental Completo - EECFJ</p>
        <p>Cursando o Segundo ano do Ensino Médio - EEFO</p>
        
        <h3>Independentes</h3>
        <ul className="lista web">
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>
                JavaScript
                <ul>
                    <li>jQuery</li>
                    <li>React JS</li>
                    <li>Node JS</li>
                </ul>
            </li>
            <li>PHP</li>
        </ul>
        <ul className="lista sistemas">
            <li>Java</li>
            <li>Python</li>
            <li>Unix Bash Script</li>
        </ul>
    </div>
);

export default Corpo;
