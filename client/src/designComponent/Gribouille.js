import React, { useState, useEffect } from 'react';
import './Gribouille.css'; // Import du fichier CSS

const Gribouille = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Position initiale de Gribouille en pixels
  const [isBouncing, setIsBouncing] = useState(false); // État pour gérer l'animation de rebond
  const [hasCrossedLine, setHasCrossedLine] = useState(false); // État pour gérer si la ligne d'arrivée est franchie
  const finishLineX = 400; // Position de la ligne d'arrivée en pixels

  // Fonction pour gérer les déplacements avec les touches fléchées
  const handleKeyDown = (event) => {
    setIsBouncing(true);
    switch (event.key) {
      case 'ArrowRight':
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x + 20, // Déplace Gribouille vers la droite de 20px
        }));
        break;
      case 'ArrowLeft':
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x - 20, // Déplace Gribouille vers la gauche de 20px
        }));
        break;
      case 'ArrowUp':
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y - 20, // Déplace Gribouille vers le haut de 20px
        }));
        break;
      case 'ArrowDown':
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y + 20, // Déplace Gribouille vers le bas de 20px
        }));
        break;
      default:
        break;
    }
    setTimeout(() => setIsBouncing(false), 500); // Stoppe l'animation après 0.5s
  };

  // Vérifie si Gribouille franchit la ligne d'arrivée
  useEffect(() => {
    if (position.x >= finishLineX) {
      setHasCrossedLine(true); // Déclenche l'état de passage de la ligne
    }
  }, [position]);

  // Utiliser useEffect pour ajouter l'écouteur d'événements pour le clavier
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Nettoyer l'événement lors du démontage du composant
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="gribouille-container" style={{ position: 'relative', height: '500px', width: '100%' }}>
      {/* Gribouille initial */}
      <div
        className={`gribouille ${isBouncing ? 'bounce' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`, // Déplacement en pixels selon x et y
        }}
      >
        <img
          src="https://www.cdiscount.com/pdt2/3/2/3/1/700x700/ggr1225896845323/rw/peluche-barbapapa-geante-barbouille-50-cm-2418.jpg"
          alt="Barbouille"
          className="gribouille-image"
        />
        <p></p>
      </div>

      {/* Ligne d'arrivée */}
      <div
        className="finish-line"
        style={{
          position: 'absolute',
          top: '0',
          left: `${finishLineX}px`,
          width: '10px',
          height: '100%',
        }}
      ></div>

      {/* Message et Barbidule qui apparaissent lorsque Barbouille franchit la ligne */}
      {hasCrossedLine && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2>Salut</h2>
          <div
            className="gribouille bounce"
            style={{
              position: 'absolute',
              top: '100px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            
        
          </div>
          <img
              src="https://www.babyjart.com/13509/barbapapa.jpg" // Image de Barbidule
              alt="Barbidule"
              className="gribouille-image"
            />
        </div>
      )}
    </div>
  );
};

export default Gribouille;