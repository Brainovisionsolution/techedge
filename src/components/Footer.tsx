import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-md border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Brain className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold text-white">BrainoVision</span>
          </div>
          <div className="text-gray-300 text-sm">
            © 2024 BrainoVision. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;