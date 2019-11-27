import React from 'react';

import './style.css';

import Academicos from './estudos/academicos';
import Tecnologias from './estudos/Tecnologias'
import Imagem from './profile';
import Projects from './projects'



const Corpo = () => (
    <div id="corpo">
        <Imagem />
        <h2>Estudos</h2>
        <Academicos />
        <Tecnologias />
        <Projects />
    </div>
);

export default Corpo;
