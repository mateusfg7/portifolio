/* https://wa.me/5537998440073\ */


import React, { useState, useEffect } from 'react';

import './style.css';

import whatsapp from './img/whatsapp.png';
import gmail from './img/gmail.png';

import api from '../../../services/api'

const MainSkills = () => {

    const [profile, setProfile] = useState([]);

    useEffect(async () => {
        const response = await api.get('/search/users?q=mateusfg7');
        setProfile({ avatar: response.data.items[0].avatar_url });
    }, []);

    return (
    <ul className="list-unstyled">
        <li className="media">
            <img src={profile.avatar} className="mr-3 profile"/>
            <div className="media-body">
                <h5 className="mt-0 mb-1">My Skills</h5>
                eu sou eu, sendo eu, porque se eu não for eu quem sera eu, nesse caso eu sou obrigado a ser eu!
                (texto teste)
            </div>
        </li>
    </ul>
    )
};

export default MainSkills;