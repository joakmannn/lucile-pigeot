import React, { useEffect, useState } from 'react';
import './BackgroundStretch.css'; // Importez les styles
import backgroundImage from '../img/bg.jpg'; // Importez l'image

const BackgroundStretch = () => {
  const [scale, setScale] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const newScale = 1 + scrollTop / 1000; // Ajustez la vitesse de l'effet ici
    setScale(newScale);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="background-container">
      <img
        src={backgroundImage} // Utilisez l'import de votre image
        alt="Dynamic Background"
        style={{
          transform: `scale(${scale}) rotate(${scale * 10}deg)`, // Ajoutez un effet de rotation en plus de l'étirement
        }}
        className="background-image"
      />
    </div>
  );
};

export default BackgroundStretch;
