import React from 'react';

const Hero = () => {
  return (
    <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 space-y-6">
        <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
          🚀 Supercharge Your Digital Workflow
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Supercharge Your <br /> 
          <span className="text-purple-600">Digital Workflow</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          Premium UI kits, tools, design assets, and productivity software—all in one place. Start creating faster today.
        </p>
        <div className="flex gap-4 pt-4">
          <button id='txt-white' className="bg-gradient-to-r from-[#4F39F6] to-[#800080]  cursor-pointer text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition">
            Explore Products
          </button>
          <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end">
        <img src="/path-to-your-hero-image.png" alt="Digital Workflow" className="w-full max-w-md rounded-2xl shadow-2xl" />
      </div>
    </section>
  );
};

export default Hero;