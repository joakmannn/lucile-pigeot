import React, { useRef } from 'react';
import CompetencesNum from '../designComponent/CompetencesNum';
import CompetencesExperimentales from '../designComponent/CompetencesExperimentales';

const Compétences = () => {
  // Créer des références pour chaque section
  const competencesNumRef = useRef(null);
  const competencesExperimentalesRef = useRef(null);

  // Fonction pour faire défiler jusqu'à un élément
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth', // Pour un défilement fluide
        block: 'center',    // Aligne l'élément au centre de la page
        inline: 'nearest',  // Aligne horizontalement si nécessaire
      });
    }
  };

  return (
    <section
      id="competences"
      className="relative min-h-screen flex flex-col items-center justify-center text-gray-800 overflow-hidden"
    >
      <div
        className="group mt-10 cursor-pointer" 
        onClick={() => scrollToSection(competencesNumRef)}  // Appelle scrollToSection sur clic
        ref={competencesNumRef}
      >
        <CompetencesNum />
        {/* Effet de survol pour CompetencesNum */}
        <style>{`
          .group:hover {
            transform: scale(1.1) translateZ(50px);
            transition: transform 0.4s ease-out;
          }
        `}</style>
      </div>
      <div
        className="group mt-10 cursor-pointer"
        onClick={() => scrollToSection(competencesExperimentalesRef)}  // Appelle scrollToSection sur clic
        ref={competencesExperimentalesRef}
      >
        <CompetencesExperimentales />
        {/* Effet de survol pour CompetencesExperimentales */}
        <style>{`
          .group:hover {
            transform: scale(1.1) translateZ(50px);
            transition: transform 0.4s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Compétences;