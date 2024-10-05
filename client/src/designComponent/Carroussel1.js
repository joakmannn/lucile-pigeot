import React, { useState } from 'react';

const Carroussel1 = ({ skill }) => {
  const [methodIndex, setMethodIndex] = useState(0); // Index de la méthode à afficher
  const methods = skill.methods || []; // Méthodes associées à la compétence passée en prop

  // Fonction pour passer à la méthode suivante
  const nextMethod = () => {
    if (methods.length > 1) {
      setMethodIndex((methodIndex + 1) % methods.length);
    }
  };

  // Fonction pour revenir à la méthode précédente
  const prevMethod = () => {
    if (methods.length > 1) {
      setMethodIndex((methodIndex - 1 + methods.length) % methods.length);
    }
  };

  // Si aucune méthode n'est disponible, afficher un message
  if (methods.length === 0) {
    return <div className="text-center">Aucune méthode disponible pour cette compétence.</div>;
  }

  return (
    <div className="gallery rounded mx-auto m-5 w-full max-w-md sm:max-w-lg lg:max-w-xl">
      {/* Titre de la compétence */}
      <div className="top flex p-4 select-none justify-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">{skill.title}</h1>
      </div>

      {/* Boutons pour changer de méthode */}
      <div className="buttons flex justify-between text-gray-600 p-2">
        <button
          onClick={prevMethod}
          className="w-8 h-8 flex justify-center items-center ml-2 sm:w-10 cursor-pointer hover:text-blue-500 transition duration-200"
          disabled={methods.length <= 1}
        >
          {/* Flèche vers la gauche */}
          ←
        </button>
        <button
          onClick={nextMethod}
          className="w-8 h-8 flex justify-center items-center mr-5 sm:w-10 cursor-pointer hover:text-blue-500 transition duration-200"
          disabled={methods.length <= 1}
        >
          {/* Flèche vers la droite */}
          →
        </button>
      </div>

      {/* Affichage de la méthode actuelle */}
      <div className="content-area w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
        <div className="platform shadow-xl h-full flex flex-col sm:flex-row transition-transform duration-300 justify-center items-center">
          <div className="sub w-full sm:w-3/6 p-4">
            <img
              className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg"
              src={`http://localhost:8000/storage/${methods[methodIndex].photo}`}
              alt={methods[methodIndex].title}
            />
          </div>
          <div className="sub w-full sm:w-3/6 p-4">
            <div className="head text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
              {methods[methodIndex].title}
            </div>
            <div className="long-text text-sm sm:text-base lg:text-lg text-gray-600">
              {methods[methodIndex].description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carroussel1;