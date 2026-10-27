import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-900 pt-16 pb-10 border-t border-orange-100 relative overflow-hidden">
      {/* Subtle warm ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-100">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logos/bovyellow.png"
                alt="BrainoVision Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-black text-black tracking-wide">
                Tech<span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">Edge</span>
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Empowering India's technical education ecosystem through AICTE-approved faculty development programs, hackathons, and high-impact bootcamps.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-orange-600 bg-orange-50 border border-orange-200/80">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Authorized Academic Partner
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li><a href="#home" className="hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-600 transition-colors">About BrainoVision</a></li>
              <li><a href="#process" className="hover:text-orange-600 transition-colors">Program Process</a></li>
              <li><a href="#programs" className="hover:text-orange-600 transition-colors">Our Programs</a></li>
              <li><a href="#benefits" className="hover:text-orange-600 transition-colors">Institutional Benefits</a></li>
              <li><a href="#contact" className="hover:text-orange-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Flagship Bootcamps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
              Flagship Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li>
                <a href="#programs" className="hover:text-orange-600 transition-colors">
                  Generative AI & Intelligent Agents FDP
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-orange-600 transition-colors">
                  Design Thinking National Workshop
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-orange-600 transition-colors">
                  Java Full Stack with React & AI
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-orange-600 transition-colors">
                  AI & Essential Skills Training
                </a>
              </li>
            </ul>
          </div>

          {/* Liaison Desk */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-3.5 rounded-full bg-gradient-to-b from-orange-500 to-amber-500" />
              Liaison Desk
            </h4>
            <div className="space-y-3 text-xs text-gray-700">
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:connect@brainovision.in" className="font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                  connect@brainovision.in
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:+919063611159" className="font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                  +91-90636 11159
                </a>
              </p>
              <p className="flex items-start gap-2.5 text-gray-600">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>Madhapur, HITEC City, Hyderabad, Telangana 500081, India</span>
              </p>
            </div>

            {/* Social channels */}
            <div className="flex items-center space-x-2.5 mt-5">
              <a
                href="https://www.instagram.com/brainovision/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/80 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:border-transparent flex items-center justify-center transition-all shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Brainovisions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/80 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:border-transparent flex items-center justify-center transition-all shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@brainovision"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/80 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:border-transparent flex items-center justify-center transition-all shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VasS8Af8vd1WyBKELA0N"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/80 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:border-transparent flex items-center justify-center transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Brainovision Solutions India Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="text-[11px] font-medium text-gray-600">
              Approved by AICTE, AIEFR, ANUVADINI & N.E.A.T
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 px-3.5 rounded-xl bg-orange-50 border border-orange-200/80 text-orange-600 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer shadow-xs"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
