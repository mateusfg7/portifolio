import React from 'react';
import './reset.css';
import './App.css';

import Header from './components/header';
import Corpo from './components/corpo';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header/>
      <Corpo />
      <Footer />
    </div>
  );
}

export default App;
