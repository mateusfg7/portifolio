import React from 'react';

import './style.css';

import Imagem from './profile';



const Corpo = () => (
    <div id="corpo">
        <Imagem />
        <h2>Estudos</h2>
        
        <h3>Acadêmicos</h3>
        <div className="box_info">
            <p>Ensino Fundamental Completo - EECFJ</p>
            <p>Ensino Médio - EEFO (CURSANDO 2º ANO)</p>
        </div>
        
        <h3>Independentes</h3>
        <div className="box_info">
            <ul className="lista">
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
                <li>Java</li>
                <li>Python</li>
                <li>Unix Bash Script</li>
            </ul>
        </div>
    </div>
);

export default Corpo;
