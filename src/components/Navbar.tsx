"use client";

import Link from "next/link";
import { useState } from "react";
import Img from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };
  return (
    <header className="bg-linear-80 sticky top-0 z-50 from-[#0B1122] to-[#222B46] text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <Img src="/logo.svg" alt="Logo" width={55} height={55} />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10 font-semibold">
            <Link
              href="/"
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
            <div className="flex items-center space-x-1">
              <div className="w-6 h-10 rounded-full flex items-center justify-center">
                <span className="text-slate-900 text-xl">💡</span>
              </div>
              <Link
                href="/idealabs"
                className="bg-gradient-to-r from-[#F9F9FF] to-[#7E79FF] bg-clip-text text-transparent transition-colors duration-200"
              >
                Idea Labs
              </Link>
            </div>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-3 bg-[#0B1122] hover:bg-slate-700/90 border border-slate-600 hover:border-slate-500 text-white px-6 py-2 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <h1 className="bg-gradient-to-r from-[#F9F9FF] to-[#79afff] bg-clip-text text-transparent transition-colors duration-200">Hubungi Kami</h1>
            </button>
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
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <nav className="px-2 pt-6 pb-4 space-y-2 ">
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
                <div className="bg-gradient-to-r from-[#F9F9FF] to-[#7E79FF] bg-clip-text text-transparent transition-colors duration-200">
                  <span className="text-slate-900 text-sm">💡</span> Idea Labs
                </div>
              </Link>
            </div>
            <div className="px-3 py-2">
              <button
                onClick={scrollToContact}
                className="inline-block bg-[#0B1122] hover:bg-slate-700/90 border border-slate-600 hover:border-slate-500 text-white px-6 py-2 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <h1 className="bg-gradient-to-r from-[#F9F9FF] to-[#79afff] bg-clip-text text-transparent transition-colors duration-200">Hubungi Kami</h1>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header >
  );
}