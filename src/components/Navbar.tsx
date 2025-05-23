import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#1E1656]/95 backdrop-blur-md border-b border-[#00D1FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#00D1FF] whitespace-nowrap">TECH-EDGE-BOOTCAMPS</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#00D1FF] hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Home</Link>
            <a href="#programs" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Programs</a>
            <a href="#benefits" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Benefits</a>
            <a href="#contact" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Contact</a>
            <a
              href="https://internships.brainovision.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00D1FF] text-[#1E1656] font-semibold px-4 py-2 rounded-md hover:bg-[#00b3e6] transition-colors"
            >
              Internship
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block text-white hover:text-[#00D1FF] px-3 py-2 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <a href="#programs" className="block text-white hover:text-[#00D1FF] px-3 py-2 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Programs</a>
            <a href="#benefits" className="block text-white hover:text-[#00D1FF] px-3 py-2 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Benefits</a>
            <a href="#contact" className="block text-white hover:text-[#00D1FF] px-3 py-2 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a
              href="https://internships.brainovision.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#00D1FF] text-[#1E1656] font-semibold px-3 py-2 rounded-md text-center hover:bg-[#00b3e6] transition-colors"
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
