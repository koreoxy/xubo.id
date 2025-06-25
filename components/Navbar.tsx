"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Xubo.id
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 shadow-lg shadow-green-600/25"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-green-400 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-800">
              <a
                href="#home"
                className="block text-gray-300 hover:text-green-400 px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#services"
                className="block text-gray-300 hover:text-green-400 px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#projects"
                className="block text-gray-300 hover:text-green-400 px-3 py-2 text-base font-medium"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block bg-green-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-green-700 transition-colors duration-200 mt-2 shadow-lg shadow-green-600/25"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
