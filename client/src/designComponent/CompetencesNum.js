import React, { useState } from 'react';

const CompetencesNum = () => {
  const [selectedFeature, setSelectedFeature] = useState(null); // État pour contrôler la fonctionnalité sélectionnée
  const [showFeatures, setShowFeatures] = useState(false); // État pour contrôler l'affichage des fonctionnalités

  const featuresList = [
    {
      title: 'Bureautique',
      description: 'Suite Office (Word, Excel, Power Point)',
      logo: 'https://news.microsoft.com/wp-content/uploads/prod/sites/113/2016/02/PreviewImage-768x354.png',
    },
    {
      title: 'Programmation',
      description: 'Python',
      logo: 'https://www.python.org/static/community_logos/python-logo.png',
    },
    {
      title: 'Homogénéisation par outil numérique',
      description: 'Librairie Python : Echoes',
      logo: 'https://www.python.org/static/community_logos/python-logo.png',
      logoSize: 'h-36 w-36', // Taille personnalisée
    },
    {
      title: 'Analyse d\'images',
      description: 'Fiji - ImageJ',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SfLYd0-5IUVvLav9u_aOMlbYjzr9XukO1wMshLoS7ItMqnV2GxbSsiGVTw&s',
      logoSize: 'h-20 w-20', // Taille personnalisée
    },
    {
      title: 'Modélisation numérique en différences finies',
      description: 'FLAC3D',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjckekHe2MWmPWu24zilu70rUQ7SwoXOXag&s',
      logoSize: 'h-24 w-24', // Taille personnalisée
    },
    {
      title: 'Logiciel d\'imagerie vectorielle',
      description: 'Inkscape',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Inkscape_Logo.svg/1200px-Inkscape_Logo.svg.png',
      logoSize: 'h-20 w-20', // Taille personnalisée
    },
    {
      title: 'Logiciels de SIG (système d\'information géographique)',
      description: 'ArcGIS',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT0HXkMfSgSHXy0vBl_IuUQuE6e8I1k7BaFA&s',
      logoSize: 'h-20 w-20', // Taille personnalisée
    },
    {
      title: 'Logiciels de SIG (système d\'information géographique)',
      description: 'QGIS',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuykzkeat02sHhYHFWoejVBHr6qkNTHiWZJCBe7zLtGhqIYWdTA3RTZKB9uDrtsuERNAs&usqp=CAU',
      logoSize: 'h-20 w-20', // Taille personnalisée
    }
  ];

  const handleFeatureClick = (index) => {
    setSelectedFeature(index === selectedFeature ? null : index); // Sélectionne ou désélectionne une fonctionnalité
  };

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures); // Inverse l'affichage des fonctionnalités
  };

  return (
    <div className="container mx-auto px-6 py-30 text-center">
      <h1 className="text-6xl md:text-6xl font-bold pb-10 cursor-pointer hover:text-indigo-600" onClick={toggleFeatures}>
        Compétences numériques
      </h1>

      {/* Affichage conditionnel des fonctionnalités */}
      {showFeatures && (
        <section
          id="features"
          className="container mx-auto px-4 space-y-6 py-12 md:py-18 lg:py-24 max-h-[600px] overflow-y-auto"
        >
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-1 md:max-w-full md:grid-cols-2">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                onClick={() => handleFeatureClick(index)} // Gère le clic sur chaque fonctionnalité
                className={`relative overflow-hidden rounded-lg border bg-white select-none p-2 cursor-pointer transform transition-transform duration-500 ease-in-out ${
                  selectedFeature === index ? 'scale-105 shadow-lg' : 'hover:shadow-lg hover:scale-105'
                }`}
              >
                <div className="flex h-[240px] flex-col justify-between items-center rounded-md p-6">
                  {feature.logo && (
                    <img
                      src={feature.logo}
                      alt={feature.title}
                      className={`${feature.logoSize || 'h-36 w-36'} mt-5 mx-auto`} // Utilise la taille personnalisée ou une taille par défaut
                    />
                  )}
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Affiche plus d'informations si une fonctionnalité est sélectionnée */}
          {selectedFeature !== null && (
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold">{featuresList[selectedFeature].title}</h2>
              <p>{featuresList[selectedFeature].description}</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default CompetencesNum;