import React, { useState } from 'react';

const Formation = () => {
  // État pour contrôler l'affichage du texte supplémentaire
  const [isTextVisible, setIsTextVisible] = useState(false);

  // Fonction pour basculer l'affichage du texte
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
      <section id="formation" className="relative min-h-screen flex flex-col items-center justify-center text-gray-800 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-20 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 pb-10 md:pb-20">Formation</h1>
          
          <div className="items-center gap-8 ">
            <div className="p-4 md:p-6 rounded-lg bg-white shadow-lg transition-transform duration-500 hover:scale-105">
              <h2
                className="text-2xl md:text-4xl font-semibold cursor-pointer hover:text-indigo-600 pb-4 md:pb-6 transition duration-300 ease-in-out"
                onClick={toggleTextVisibility} 
              >
                Étude multi-échelle de l’effet de la pression de cure sur le comportement d’un limon stabilisé à la chaux et au liant hydraulique
              </h2>
              
              {/* Section déroulante avec transition */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  isTextVisible ? 'opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-left mt-4 md:mt-6 p-4 md:p-6 rounded-lg shadow-md transition duration-300 ease-in-out">
                  <h2 className="text-xl md:text-3xl pb-4 md:pb-6 text-gray-800 font-semibold mb-4">Contexte et verrous scientifiques</h2>
                  <p className="pb-6 md:pb-8 text-lg md:text-2xl">
                    Des impératifs économiques et environnementaux incitent désormais les Maîtres d’Ouvrages à encourager l’utilisation des matériaux en place pour la construction d’infrastructures de transport et d’ouvrages géotechniques en particulier. L’utilisation de la technique du traitement à la chaux et aux liants hydrauliques des sols en place permet d’en améliorer la maniabilité et les propriétés mécaniques. L'enjeu aujourd’hui est d’utiliser ces sols traités comme partie intégrante d’ouvrages de génie civil. Pour cela, une compréhension fine du comportement hydro-chemo-mécanique de ces sols est attendue.
                  </p>

                  <p className="pb-6 md:pb-8 text-lg md:text-2xl">
                    Dans le cadre de ce projet doctoral, la campagne expérimentale permet d’étudier le comportement mécanique d’un limon traité à la chaux et au liant hydraulique qui sera placé compacté en tant que remblai technique de grande hauteur (>20 m). Les travaux de la thèse mettent en évidence une différence de cinétique d’amélioration des propriétés de ce sol en fonction du temps, apportée par l’application d’une pression de confinement isotrope sur le matériau en cure.
                  </p>

                  <p className="pb-6 md:pb-8 text-lg md:text-2xl">
                    Dans l’optique d’approcher au mieux le comportement mécanique in situ du sol traité par l’intermédiaire d’essais, il est préférable d’appliquer des conditions de cure en laboratoire qui soient semblables à celles sur site. Pour cela, des essais ont été réalisés sur des éprouvettes ayant eu une cure avec une pression de confinement appliquée en continu. Ce type d’essai est déjà réalisé sur des sables cimentés, du ciment placé à grande profondeur (pour des puits de pétrole par exemple) ou dans des mines remblayées (CBP). Ils ont le point commun d’être soumis à des pressions de confinement élevées (de 0,5 à 4 MPa), ce qui n’est pas le cas du matériau étudié dans ce projet.
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Formation;