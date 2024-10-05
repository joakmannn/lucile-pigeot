import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="section-heading text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img src="./images/abm.png" alt="Abdul Basit Memon" className="rounded-full w-64 h-64 object-cover object-center shadow-lg" />
        </div>
        <div className="md:w-1/2 md:ml-12">
          <p className="text-lg mb-6">I am Abdul Basit Memon, a final-year Computer Systems Engineering student with a passion for data science, graphic design, and technology. I have over two years of experience in graphic designing and have led several innovative projects.</p>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-700">Data Science</span>
                <span className="text-sm font-medium text-indigo-700">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress bg-indigo-200" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-700">Graphic Design</span>
                <span className="text-sm font-medium text-indigo-700">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress bg-indigo-200" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-700">Web Development</span>
                <span className="text-sm font-medium text-indigo-700">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress bg-indigo-200" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
