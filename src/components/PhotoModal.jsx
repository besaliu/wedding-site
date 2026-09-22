import React, { useEffect } from 'react';
import { X, MapPin, Calendar } from 'lucide-react';

export default function PhotoModal({ photo, onClose }) {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative max-h-[70vh] bg-black/10 flex items-center justify-center overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title || 'Photo'}
            className="w-full h-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Details Footer */}
        <div className="p-6 bg-[#FAF7F2]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 className="font-serif text-2xl text-[#4A3F35] font-normal">{photo.title}</h4>
            <div className="flex items-center space-x-4 text-xs text-[#8C7A6B]">
              {photo.date && (
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{photo.date}</span>
                </span>
              )}
              {photo.location && (
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{photo.location}</span>
                </span>
              )}
            </div>
          </div>
          {photo.description && (
            <p className="text-[#6C5840] text-sm leading-relaxed font-light">{photo.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
