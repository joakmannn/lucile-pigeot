import React, { useState, useEffect } from "react";

const Header = () => {
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);

  // Fonction pour gérer le changement d'état en fonction du scroll
  const handleScroll = () => {
    setAtTop(window.pageYOffset <= 50);
  };

  useEffect(() => {
    // Ajouter un event listener au scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Nettoyer l'event listener lorsqu'on quitte le composant
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={`fixed z-50 w-full px-8 py-4 transition-all duration-500 rounded-full mt-4 max-w-6xl inset-x-0 mx-auto ease-in-out transform hidden md:flex ${
          atTop ? "bg-white" : "bg-black bg-opacity-90 backdrop-blur-lg"
        }`}
      >
        <div className="flex w-full align-middle justify-between ">
          {/* Logo aligné à gauche */}
          <div
            className={`pr-4 text-3xl font-bold uppercase tracking-tighter transition-colors duration-500 ${
              atTop ? "text-black" : "text-white"
            }`}
          >
            ✺ Lucile Pigeot
          </div>

          {/* Navigation alignée à droite */}
          <nav
            className={`flex text-2xl space-x-10 ${
              atTop ? "text-gray-900" : "text-white"
            } `}
          >
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#formation" className="hover:text-gray-400">
              Formation
            </a>
            <a href="#competences" className="hover:text-gray-400">
              Compétences
            </a>
            <a href="#valorisation" className="hover:text-gray-400">
              Valorisation
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
