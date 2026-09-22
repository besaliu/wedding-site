import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Wedding Party', href: '#wedding-party' },
    { name: 'Schedule & Venue', href: '#logistics' },
    { name: 'Hotel Block', href: '#hotel' },
    { name: 'Registry', href: '#registry' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-soft border-b border-[#E8DFD1]/60 py-3.5'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          className="group flex items-center space-x-2 transition-transform duration-200 hover:scale-[1.02]"
        >
          <span
            className={`font-serif text-2xl tracking-widest uppercase transition-colors ${
              isScrolled ? 'text-[#4A3F35]' : 'text-white'
            }`}
          >
            {weddingConfig.couple.monogram}
          </span>
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              isScrolled ? 'text-[#C5A880]' : 'text-white/80'
            } fill-current`}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#C5A880] ${
                isScrolled ? 'text-[#6C5840]' : 'text-white/90 drop-shadow-sm'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#rsvp"
            className={`text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm ${
              isScrolled
                ? 'bg-[#4A3F35] text-[#FAF7F2] hover:bg-[#32281D]'
                : 'bg-white text-[#4A3F35] hover:bg-[#FAF7F2]'
            }`}
          >
            RSVP
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href="#rsvp"
            className={`text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full transition-colors ${
              isScrolled
                ? 'bg-[#4A3F35] text-[#FAF7F2]'
                : 'bg-white text-[#4A3F35]'
            }`}
          >
            RSVP
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 rounded-md focus:outline-none transition-colors ${
              isScrolled ? 'text-[#4A3F35]' : 'text-white'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-[#E8DFD1] px-5 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium tracking-wider uppercase text-[#4A3F35] hover:text-[#C5A880] py-1 border-b border-[#E8DFD1]/40"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#rsvp"
                onClick={handleLinkClick}
                className="block text-center w-full py-2.5 rounded-full bg-[#4A3F35] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold hover:bg-[#32281D]"
              >
                RSVP Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
