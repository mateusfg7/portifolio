import React from 'react';

import './style.css';

import MainSkills from './profile';
import Formacao from './estudos/formacao';
import Projects from './projects';

const Corpo = () => (
  <section className="conteiner p-2 main-section">
    <MainSkills />
    <Formacao />
    <Projects />
  </section>
);

export default Corpo;
