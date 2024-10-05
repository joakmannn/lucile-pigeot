import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import pp from '../img/pp.jpeg'; 

const Valorisation = () => {
  const [showCompetences, setShowCompetences] = useState(false);
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/articles');
        setPosts(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
        setError(true); 
        setLoading(false); 
      }
    };

    fetchArticles(); 
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-16">
      <h2
        onClick={() => setShowCompetences(!showCompetences)}
        className="mt-2 text-6xl font-bold tracking-tight text-gray-900 cursor-pointer hover:text-indigo-600 transition duration-300"
      >
        Articles de conférences
      </h2>

      {showCompetences && (
        <>
          <div className="w-full flex justify-center mt-16">
            {loading ? (
              <p>Chargement des articles...</p>
            ) : error ? (
              <p className="text-red-500">Erreur lors du chargement des articles.</p>
            ) : (
              <div className="w-full max-w-6xl max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-start">
                  {posts
                    .filter(post => post.type === 'Article de conférence') // Filtrer les articles de type conférence
                    .map((post, index) => (
                      <article
                        key={index}
                        className="flex flex-col items-start justify-between p-6 border border-gray-200 rounded-lg transition-transform duration-300 hover:shadow-lg hover:scale-105"
                      >
                        <div className="group relative">
                          <h3 className="mt-3 text-lg font-semibold leading-7 text-gray-900 group-hover:text-gray-600">
                            <a 
                              href={post.url} // Utiliser l'URL de l'article récupérée du backend
                              target="_blank" // Ouvre dans un nouvel onglet
                              rel="noopener noreferrer" // Bonnes pratiques de sécurité
                            >
                              <span className="absolute inset-0" />
                              {post.title}
                            </a>
                          </h3>
                        </div>
                        <div className="relative mt-8 flex items-center gap-x-4">
                          <img
                            alt=""
                            src={pp} 
                            className="h-12 w-12 rounded-full bg-gray-50"
                          />
                          <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                              {Array.isArray(post.creators) ? post.creators.join(', ') : post.creators}
                            </p>
                            <p className="text-gray-600">Auteur(s)</p>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Valorisation;
