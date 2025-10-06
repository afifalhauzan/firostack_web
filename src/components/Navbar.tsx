"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Img from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      return;
    }

    // If we're on the home page, scroll directly
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const scrollToContact = () => {
    scrollToSection('contact-us');
  };

  const scrollToJasa = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor behavior
    scrollToSection('jasa');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight; // Approximate hero section height
      
      setIsScrolled(scrollPosition > heroHeight * 0.3); // Show background after scrolling 30% of viewport
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scrolling to section when page loads with hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.substring(1);
      if (hash && pathname === '/') {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          const section = document.getElementById(hash);
          if (section) {
            section.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, [pathname]);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 text-white">
      {/* Background Layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#0B1122] to-[#222B46] backdrop-blur-lg shadow-lg transition-opacity duration-500 -z-10 ${
          isScrolled || isMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative container mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <Img src="/logo.svg" alt="Logo" width={55} height={55} />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10 font-semibold">
            <Link
              href="#"
              className="text-white hover:text-indigo-300 transition-colors duration-200"
              onClick={scrollToJasa}
            >
              Jasa
            </Link>
            <Link
              href="/campus"
              className="text-white hover:text-indigo-300 transition-colors duration-200"
            >
              Campus Ambassador
            </Link>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-10 rounded-full flex items-center justify-center">
                <span className="text-slate-900 text-xl">💡</span>
              </div>
              <Link
                href="/idealabs"
                className="bg-gradient-to-r from-[#F9F9FF] to-[#7E79FF] bg-clip-text text-transparent transition-colors duration-200 hover:bg-indigo-300"
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
              href="#"
              className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-slate-800 rounded-md transition-colors duration-200"
              onClick={scrollToJasa}
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