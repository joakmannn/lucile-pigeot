import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import Contact from './component/Contact';
import Valorisation from './component/Valorisation';
import Formation from './component/Formation';
import Compétences from './component/Compétences';
import BackgroundStretch from './designComponent/BackgroundStretch';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className="pt-16 relative"> {/* Ajoutez "relative" ici pour le contexte du z-index */}
        <Home />
        <BackgroundStretch /> {/* Appliquer l'effet de fond après Home */}
        <Formation />
        <Compétences />
        <Valorisation />
        <Contact />
      </main>
      <Footer className="footer-separate" />
    </div>
  );
}

export default App;
