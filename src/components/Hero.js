import React from "react";

function Hero() {
  return (
    <div
      id="home"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-40 pb-32"
    >
      <div className="container mx-auto text-center px-4">
        <div className="text-7xl font-bold mb-6 animate-bounce text-red-500">
          ⌘
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500">
          Welcome to CMD LLC
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We provide innovative digital solutions from Bandung City
        </p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50">
          Explore Our Services
        </button>
      </div>
    </div>
  );
}

export default Hero;
