import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const words = ["Docteure en Génie Civil", ""];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      let currentWord = words[currentWordIndex];
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
        if (letterIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
        if (letterIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(type, 200);

    return () => clearTimeout(timeout);
  }, [currentWordIndex, isDeleting, letterIndex, words]);
 
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-4xl text-gray-900 font-bold">{currentText}</h1>
    </div>
  );
};

export default Typewriter;
