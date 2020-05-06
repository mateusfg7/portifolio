import React from 'react';
import './reset.css';
import './App.css';
import './variables.css';


export default function App() {
  return (
    <div>
      <section className="home">
        <div className="about">
          <div className="description">
            Meu nome é Mateus Felipe, tenho 17 anos,
            gosto de sempre estar estudando e aprendendo coisas novas,
            principalmente no ramo de tecnologia.
          </div>
          <div className="profile-photo">
            {/* <img src="https://i.imgur.com/EFeEbuJ.jpg" alt="" /> */}
            <img src="https://i.imgur.com/Ai49JH1.gif" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
