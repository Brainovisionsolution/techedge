import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold text-white">BrainoVision</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-yellow-400 px-3 py-2">Home</Link>
            <a href="#programs" className="text-white hover:text-yellow-400 px-3 py-2">Programs</a>
            <a href="#benefits" className="text-white hover:text-yellow-400 px-3 py-2">Benefits</a>
            <a href="#contact" className="text-white hover:text-yellow-400 px-3 py-2">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;