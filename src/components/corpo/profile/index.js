import React, { useState, useEffect } from 'react';

import './style.css';

import api from '../../../services/api';

const MainSkills = () => {
  const [profile, setProfile] = useState([]);

  useEffect(async () => {
    const response = await api.get('/users/mateusfg7');
    setProfile({ avatar: response.data.avatar_url });
  }, []);

  return (
    <ul className="list-unstyled main-section">
      <li className="flex-responsive">
        <img src={profile.avatar} alt="foto pessoal" className="mr-3 profile" />
        <div className="media-body">
          <h5 className="mt-0 mb-1" id="skills">
            Sobre
          </h5>
          eu sou eu, sendo eu, porque se eu não for eu quem sera eu, nesse caso
          eu sou obrigado a ser eu! (texto teste)
        </div>
      </li>
    </ul>
  );
};

export default MainSkills;
