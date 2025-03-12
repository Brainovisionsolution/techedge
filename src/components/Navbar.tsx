import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#1E1656]/95 backdrop-blur-md border-b border-[#00D1FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#00D1FF]">TECH-EDGE-BOOTCAMPS</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Home</Link>
            <a href="#programs" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Programs</a>
            <a href="#benefits" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Benefits</a>
            <a href="#contact" className="text-white hover:text-[#00D1FF] px-3 py-2 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;