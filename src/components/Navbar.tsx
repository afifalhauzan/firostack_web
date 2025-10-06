"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded">
              <span className="text-white font-bold text-lg">&lt;/&gt;</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/jasa" 
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              Jasa
            </Link>
            <Link 
              href="/campus" 
              className="text-white hover:text-blue-300 transition-colors duration-200"
            >
              Campus Ambassador
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 text-sm">💡</span>
              </div>
              <Link 
                href="/idealabs" 
                className="text-white hover:text-blue-300 transition-colors duration-200"
              >
                Idea Labs
              </Link>
            </div>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Hubungi Kami
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-8 h-8"
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <Link 
              href="/jasa" 
              className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-slate-800 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Jasa
            </Link>
            <Link 
              href="/campus" 
              className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-slate-800 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Campus Ambassador
            </Link>
            <div className="px-3 py-2">
              <Link 
                href="/idealabs" 
                className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-slate-900 text-sm">💡</span>
                </div>
                <span>Idea Labs</span>
              </Link>
            </div>
            <div className="px-3 py-2">
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Hubungi Kami
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}