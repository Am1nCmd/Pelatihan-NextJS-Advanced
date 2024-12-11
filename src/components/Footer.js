import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="text-4xl mb-6 text-red-500 animate-pulse">⌘</div>
        <p className="text-lg mb-4">
          &copy; 2024 CMD LLC. All rights reserved.
        </p>
        <p className="mb-8">
          <a
            href="mailto:support@cmd.id"
            className="text-red-500 hover:text-red-400 transition-colors duration-300 font-medium"
          >
            support@cmd.id
          </a>
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="#"
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
