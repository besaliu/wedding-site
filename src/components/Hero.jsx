import React from 'react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function Hero() {
  const { hero, couple } = weddingConfig;

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt={`${couple.bride} and ${couple.groom}`}
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.03] transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Warm tint overlays for warm beige aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D2721]/50 via-transparent to-[#FAF7F2]" />
        <div className="absolute inset-0 bg-[#4A3F35]/15 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16 flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 mb-4 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white/95 text-xs sm:text-sm tracking-[0.25em] uppercase font-light">
          <span>{hero.eyebrow}</span>
        </div>

        {/* Names */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-normal tracking-wide drop-shadow-md my-2">
          {hero.title}
        </h1>

        {/* Subtitle / Invitation text */}
        <p className="max-w-xl text-white/90 text-sm sm:text-base font-light tracking-wide leading-relaxed mt-3 mb-6">
          {hero.subtitle}
        </p>

        {/* Date & Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white/95 text-xs sm:text-sm font-medium tracking-wider uppercase mb-8">
          <span className="flex items-center space-x-2 bg-black/25 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Calendar className="w-3.5 h-3.5 text-[#E8DFD1]" />
            <span>{couple.weddingDate}</span>
          </span>
          <span className="flex items-center space-x-2 bg-black/25 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <MapPin className="w-3.5 h-3.5 text-[#E8DFD1]" />
            <span>Napa Valley, California</span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#rsvp"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FAF7F2] text-[#4A3F35] font-semibold text-xs tracking-widest uppercase shadow-lg hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {hero.rsvpButtonText}
          </a>
          <a
            href="#logistics"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-medium text-xs tracking-widest uppercase hover:bg-white/25 transition-all duration-200"
          >
            {hero.detailsButtonText}
          </a>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a
        href="#countdown-section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white flex flex-col items-center space-y-1 transition-colors animate-bounce"
        aria-label="Scroll down to countdown"
      >
        <span className="text-[10px] uppercase tracking-widest font-light">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}
