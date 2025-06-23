import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src="/logos/bovyellow.png"
              alt="BrainoVision Logo"
              className="h-10 w-auto object-contain" // ⬅️ Increased size
            />
            <span className="text-2xl font-bold text-white tracking-wide">
              BrainoVision
            </span>
          </div>

          {/* Copyright */}
          <div className="text-base text-gray-200 text-center md:text-right">
            © 2024 BrainoVision. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
