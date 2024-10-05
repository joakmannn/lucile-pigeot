import React from 'react';
import ArticlesRevues from '../assets/ArticlesRevues';
import ArticlesConferences from '../assets/ArticlesConferences';
import Distinctions from '../assets/Distinctions';

const Valorisation = () => {
  return (
    <section id="valorisation" className="relative min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="w-full flex items-center mb-8">
          <div className="group flex justify-center w-full">
            <ArticlesRevues />
            {/* Effet de survol pour ArticlesRevues */}
            <style jsx>{`
              .group:hover {
                transform: scale(1.1) translateZ(50px);
                transition: transform 0.4s ease-out;
              }
            `}</style>
          </div>
        </div>

        <div className="group flex justify-center w-full mb-8">
          <ArticlesConferences />
          {/* Effet de survol pour ArticlesConferences */}
          <style jsx>{`
            .group:hover {
              transform: scale(1.1) translateZ(50px);
              transition: transform 0.4s ease-out;
            }
          `}</style>
        </div>

        <div className="group flex justify-center w-full">
          <Distinctions />
          {/* Effet de survol pour Distinctions */}
          <style jsx>{`
            .group:hover {
              transform: scale(1.1) translateZ(50px);
              transition: transform 0.4s ease-out;
            }
          `}</style>
        </div>
      </div>
      
      {/* Removed background gradient for a clean white background */}
    </section>
  );
}

export default Valorisation;
