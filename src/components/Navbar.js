import React from "react";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
          <span className="text-red-500 text-3xl mr-2 animate-pulse">⌘</span>
          <h1 className="text-white text-xl font-bold">CMD LLC</h1>
        </div>
        <ul className="flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-red-500 transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
