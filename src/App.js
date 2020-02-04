import React from 'react';
import './reset.css';
import './App.css';

import Header from './components/header';
import Corpo from './components/corpo';
import Footer from './components/footer';

export default function App() {
  return (
    <div id="App" className="container-fluid">
      <Header/>
      <Corpo />
      <Footer />
    </div>
  );
}
