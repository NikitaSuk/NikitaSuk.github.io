'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Nikita Sukharevich
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Experience
            </button>
            <a
              href="https://drive.google.com/file/d/1BJ_VoaGGdHwlf6t-zak8hx9CQiCr6y6N/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Résumé
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
            >
              Experience
            </button>
            <a
              href="https://drive.google.com/file/d/1BJ_VoaGGdHwlf6t-zak8hx9CQiCr6y6N/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 