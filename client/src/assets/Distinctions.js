import React, { useState } from 'react';

const posts = [
  {
    id: 1,
    title: 'Prix de la recherche',
    href: 'https://gem.ec-nantes.fr/trois-prix-decernes-aux-doctorantes-et-doctorants-du-gem-lors-des-rencontres-universitaires-du-genie-civil-rugc/#:~:text=Le%20prix%20de%20la%20recherche,collaboration%20GeM%20%E2%80%93%20Cerema%20%E2%80%93%20Egis%20.',
    description:
      ' Rencontres Universitaires du Génie Civil ',
    date: '28, 31 mai 2024',
    datetime: '2024-06-13',
    category: { title: '', href: '#' },
    author: {
      name: 'Lucile Pigeot',
      role: 'Le Havre, France.',
      href: '#',
      imageUrl:
      'https://gem.ec-nantes.fr/wp-content/uploads/2015/12/logoGeMNewR2_120.png'
    },
  },
  // More posts...
];

const Valorisation = () => {
  const [showCompetences, setShowCompetences] = useState(false); // Utilisation de useState pour gérer l'état

  return (
    <div className="w-full flex flex-col items-center mt-16">
      <h2
        onClick={() => setShowCompetences(!showCompetences)}
        className="text-6xl font-bold tracking-tight text-gray-900 cursor-pointer hover:text-indigo-600 transition duration-300"
      >
        Distinctions
      </h2>

      {showCompetences && (
        <>
          <div className="w-full flex justify-center mt-10">
            <div className="flex flex-col md:flex-row justify-center items-center md:space-y-0 md:space-x-10 w-full max-w-4xl">
              {posts.slice(0, 2).map((post) => (
                <article key={post.id} className="w-full md:w-1/2 flex flex-col items-center justify-between p-5 border border-gray-200 rounded-lg">
                  <div className="flex items-center ml-9 gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-7 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="w-full flex justify-center mt-10">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 max-w-4xl">
              {posts.slice(2).map((post) => (
                <article key={post.id} className="w-full md:w-1/2 flex flex-col items-start justify-between p-5 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-7 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex flex-col items-center gap-x-4">
                    <img
                      alt=""
                      src={post.author.imageUrl}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6 text-center"> {/* Ajout de text-center ici */}
                      <p className="font-semibold text-gray-900 text-center"> {/* Ajout de text-center ici */}
                        <a href={post.author.href} target="_blank" rel="noopener noreferrer">
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600 text-center"> {/* Ajout de text-center ici */}
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Valorisation;
