import React from 'react';
/* import './reset.css' */
import './App.css';

import Header from './components/header';
import Corpo from './components/corpo';
import Footer from './components/footer';

export default function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Corpo />
      <Footer />
    </div>
  );
}
