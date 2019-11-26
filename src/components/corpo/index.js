import React from 'react';

import './style.css';

import Academicos from './estudos/academicos';
import Independentes from './estudos/independentes'
import Imagem from './profile';
import Projects from './projects'



const Corpo = () => (
    <div id="corpo">
        <Imagem />
        <h2>Estudos</h2>
        <Academicos />
        <Independentes />
        <Projects />
    </div>
);

export default Corpo;
