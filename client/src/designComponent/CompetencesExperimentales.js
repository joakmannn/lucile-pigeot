import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carroussel1 from './Carroussel1';

const CompetencesExperimentales = () => {
  const [showCarousels, setShowCarousels] = useState(false); // Gérer l'affichage des carrousels
  const [skills, setSkills] = useState([]); // Stocker les compétences

  // Récupérer les compétences via l'API (ou depuis un état initial)
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/skills')
      .then((response) => {
        setSkills(response.data); // Met à jour les compétences
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des compétences :', error);
      });
  }, []);

  // Fonction pour basculer l'affichage des carrousels
  const toggleCarousels = () => {
    setShowCarousels(!showCarousels);
  };

  return (
    <div className="container mx-auto px-6 py-10 text-center">
      {/* Titre cliquable pour basculer l'affichage des compétences */}
      <h1
        className="text-6xl md:text-6xl font-bold mb-8 pb-10 cursor-pointer hover:text-indigo-600"
        onClick={toggleCarousels}
      >
        Compétences expérimentales
      </h1>

      {/* Affichage conditionnel des carrousels */}
      {showCarousels && (
        <div
          className="flex flex-col space-y-10 bg-white overflow-y-auto h-[600px] py-6"
          style={{ scrollSnapType: 'y mandatory' }} // Rendre le défilement fluide
        >
        

          {/* Section des compétences expérimentales (carrousel) */}
          <div className="competence-experimentale flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden"
                >
                  <Carroussel1 skill={skill} /> {/* Chaque compétence est passée en prop */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetencesExperimentales;