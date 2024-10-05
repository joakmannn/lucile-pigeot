import React from 'react';

const Footer = () => {
  return (
    <div className="text-center py-12">
      {/* Lucile Pigeot avec l'effet de survol */}
      <a
        href="#"
        className="flex items-center justify-center mb-8 text-4xl font-semibold text-gray-900 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-indigo-600"
      >
        ✺ Lucile Pigeot
      </a>

      {/* Copyright */}
      <span className="block text-lg text-center text-gray-500">
        © 2024 jd.tech. All Rights Reserved. Built with React and Laravel
      </span>

      {/* Icons */}
      <ul className="flex justify-center mt-8 space-x-8">
        <li>
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/lucile-pigeot/?originalSubdomain=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900"
          >
            {/* Doubler la taille des icônes */}
            <svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-3v-11h3v11zm-1.5-12.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13 12.28h-3v-5.605c0-1.337-.025-3.061-1.865-3.061-1.866 0-2.152 1.458-2.152 2.964v5.702h-3v-11h2.877v1.504h.041c.401-.759 1.38-1.558 2.841-1.558 3.04 0 3.6 2.001 3.6 4.602v6.452z"
              />
            </svg>
          </a>
        </li>
        <li>
          {/* Email Icon */}
          <a
            href="mailto:lucileetco@gmail.com"
            className="text-gray-500 hover:text-gray-900"
          >
            <svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm0 2h20v1.72l-9.666 7.058a2 2 0 0 1-2.668 0L2 7.72V6zm0 4.087l6.863 5.013L2 18.008V10.087zM17.137 15.1L22 10.086v7.92l-4.863-2.907z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;