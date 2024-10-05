import React from 'react';
import Typewriter from '../designComponent/TypeWriter'; // Assurez-vous d'importer le composant Typewriter

const Home = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="container mx-auto px-6 py-20 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Lucile Pigeot</h1>
      
      {/* Typewriter Component */}
      <div className="text-xl mt-10 md:text-2xl mb-12">
        <Typewriter className="text-gray-900"/>
      </div>

      <a href="./images/Resume.pdf" className="bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300">
        Download CV
      </a>
    </div>
    
    {/* Background gradient with more intense colors and blur effect */}
  </section>
);

export default Home;
