import React, { useState, useRef } from 'react';
import axios from 'axios'; // Importer Axios pour l'envoi des requêtes

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null); // Référence pour le formulaire

  // États pour stocker les données du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState(''); // Message de réponse après l'envoi

  const [sent, setSent] = useState(''); // Message de réponse après l'envoi


  const toggleForm = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        window.scrollTo({ behavior: 'smooth', top: document.body.scrollHeight });
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Données à envoyer au backend
    const formData = {
      name,
      email,
      message,
    };

    try {
      // Envoi des données au backend Laravel via Axios
      const response = await axios.post('http://localhost:8000/api/contact/submit', formData);

      // Gérer la réponse du backend
      if (response.status === 200) {
        setResponseMessage('Message envoyé avec succès!');
        setName(''); // Réinitialiser le champ nom
        setEmail(''); // Réinitialiser le champ email
        setMessage(''); // Réinitialiser le champ message
        setSent(true);
      }

    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      setResponseMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  return (
    <section id="contact" className="py-40 bg-white relative">
      <div className="container mx-auto px-12">
        <h2 
          onClick={toggleForm} 
          className="section-heading text-7xl font-bold text-center mb-20 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-indigo-600"
        >
          Me contacter
        </h2>

        <div
          ref={formRef}
          className={`mt-12 transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="md:flex md:justify-center">
            <div className="w-full max-w-3xl transform transition-all duration-500 ease-in-out">
              { !sent?
                (<form className="p-12 bg-gray-100 shadow-lg rounded-lg" >
                <div className="mb-8">
                  <label className="block text-gray-700 text-2xl font-bold mb-4" htmlFor="name">
                    Nom complet
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} // Mise à jour du nom
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-gray-700 text-2xl font-bold mb-4" htmlFor="email">
                    Adresse email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'email
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="mb-12">
                  <label className="block text-gray-700 text-2xl font-bold mb-4" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-60"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} // Mise à jour du message
                    placeholder="Votre message..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded transition-transform duration-300 ease-in-out transform hover:scale-105 text-xl"
                    type="submit"
                    onClick ={handleSubmit}
                  >
                    Envoyer le message
                  </button>
                </div>
                {responseMessage && (
                  <div className="mt-4 text-green-600">
                    {responseMessage}
                  </div>
                )}
              </form>): (<div>
                Merci pour votre message
              </div>
                
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;