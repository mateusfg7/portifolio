import React from 'react';

import './style.css';

import MainSkills from './profile';
import Formacao from './estudos/formacao';
import Tecnologias from './estudos/Tecnologias';
import Projects from './projects';


const Corpo = () => (
  <section className="conteiner p-2">
    <MainSkills />
    <Formacao />
    <Projects />
  </section>
);

export default Corpo;
