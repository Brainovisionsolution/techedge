import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-black tracking-tight whitespace-nowrap bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              TECH-EDGE-BOOTCAMPS
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-orange-500 hover:bg-orange-50 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-2 items-center">
            <Link
              to="/"
              className="text-black hover:text-orange-500 font-semibold px-3 py-2 rounded-md transition-colors"
            >
              Home
            </Link>
            <a
              href="#programs"
              className="text-black hover:text-orange-500 font-semibold px-3 py-2 rounded-md transition-colors"
            >
              Programs
            </a>
            <a
              href="#benefits"
              className="text-black hover:text-orange-500 font-semibold px-3 py-2 rounded-md transition-colors"
            >
              Benefits
            </a>
            <a
              href="#contact"
              className="text-black hover:text-orange-500 font-semibold px-3 py-2 rounded-md transition-colors"
            >
              Contact
            </a>
            <a
              href="https://internships.brainovision.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-500 text-black font-bold px-4 py-2 rounded-md shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200"
            >
              Internship
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white/98 border-t border-orange-100 rounded-b-xl shadow-lg`}>
          <div className="px-3 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className="block text-black hover:text-orange-500 hover:bg-orange-50 font-semibold px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#programs"
              className="block text-black hover:text-orange-500 hover:bg-orange-50 font-semibold px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="#benefits"
              className="block text-black hover:text-orange-500 hover:bg-orange-50 font-semibold px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#contact"
              className="block text-black hover:text-orange-500 hover:bg-orange-50 font-semibold px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://internships.brainovision.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-500 text-black font-bold px-4 py-2 rounded-md text-center shadow-md shadow-orange-500/20 transition-all mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Internship
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
