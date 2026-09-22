import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function Footer() {
  const { couple } = weddingConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E8DFD1] py-16 text-center relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Monogram */}
        <div className="font-serif text-4xl sm:text-5xl text-[#4A3F35] font-light tracking-widest uppercase mb-3">
          {couple.monogram}
        </div>

        {/* Closing Note */}
        <p className="font-serif text-xl sm:text-2xl text-[#6C5840] italic font-normal mb-4">
          With all our love, {couple.bride} & {couple.groom}
        </p>

        {/* Hashtag */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#E8DFD1] text-xs font-mono text-[#8C7A6B] tracking-wider mb-8 shadow-xs">
          {couple.hashtag}
        </div>

        {/* Date & Location */}
        <div className="text-xs uppercase tracking-widest text-[#8C7A6B] font-medium mb-10">
          October 24, 2026 • Napa Valley, California
        </div>

        {/* Back to top button */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-[#E8DFD1] text-xs uppercase tracking-wider text-[#6C5840] hover:text-[#4A3F35] hover:bg-[#F4EFE6] transition-all shadow-xs"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Back To Top</span>
          </button>
        </div>

        <div className="mt-12 text-[11px] text-[#A3998E] font-light flex items-center justify-center space-x-1">
          <span>Crafted with love for our celebration</span>
          <Heart className="w-3 h-3 text-[#C5A880] fill-current" />
        </div>
      </div>
    </footer>
  );
}
