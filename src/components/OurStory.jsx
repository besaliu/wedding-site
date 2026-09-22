import React, { useState } from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { Calendar, MapPin, Maximize2, Heart } from 'lucide-react';
import PhotoModal from './PhotoModal';

export default function OurStory() {
  const { story } = weddingConfig;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="story" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#8C7A6B] font-semibold mb-3">
            <span>Our Journey</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3F35] font-normal tracking-wide">
            {story.sectionTitle}
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto my-4" />
          <p className="text-[#6C5840] text-sm sm:text-base font-light leading-relaxed">
            {story.sectionSubtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop: centered; Mobile: left aligned) */}
          <div className="absolute top-4 bottom-4 left-6 md:left-1/2 -ml-[1px] w-[2px] bg-[#E8DFD1]" />

          <div className="space-y-12 md:space-y-16">
            {story.milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Timeline Dot with Heart Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#FAF7F2] border-2 border-[#C5A880] flex items-center justify-center shadow-md z-10 transition-transform duration-300 hover:scale-110">
                    <Heart className="w-3.5 h-3.5 text-[#C5A880] fill-current" />
                  </div>

                  {/* Content Card Wrapper */}
                  <div
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
                    }`}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-7 border border-[#E8DFD1] shadow-card hover:shadow-soft transition-all duration-300 group">
                      {/* Photo Container */}
                      <div
                        onClick={() => setSelectedPhoto(item)}
                        className="relative h-52 sm:h-64 rounded-xl overflow-hidden mb-5 cursor-pointer bg-[#F5EFE6] group-hover:opacity-95 transition-opacity"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Hover Overlay with expand icon */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                          <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-xs font-medium tracking-wider uppercase">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>Enlarge</span>
                          </span>
                        </div>
                      </div>

                      {/* Date & Location Badges */}
                      <div
                        className={`flex flex-wrap items-center gap-3 text-xs text-[#8C7A6B] font-medium mb-2.5 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                          <span>{item.date}</span>
                        </span>
                        {item.location && (
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                            <span>{item.location}</span>
                          </span>
                        )}
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-serif text-2xl text-[#4A3F35] font-normal mb-2.5">
                        {item.title}
                      </h3>

                      {/* Milestone Description */}
                      <p className="text-[#6C5840] text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
}
