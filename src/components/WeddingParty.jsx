import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function WeddingParty() {
  const { weddingParty } = weddingConfig;
  const [activeTab, setActiveTab] = useState('bridesmaids'); // 'bridesmaids' | 'groomsmen'
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMembers =
    activeTab === 'bridesmaids'
      ? weddingParty.bridesmaids
      : weddingParty.groomsmen;

  // Touch gesture state
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Reset index when changing tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  // Compute number of items visible based on window width
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, currentMembers.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="wedding-party" className="py-20 lg:py-28 bg-[#F4EFE6]/60 relative overflow-hidden border-y border-[#E8DFD1]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#8C7A6B] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Our Nearest & Dearest</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3F35] font-normal tracking-wide">
            {weddingParty.sectionTitle}
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto my-4" />
          <p className="text-[#6C5840] text-sm sm:text-base font-light leading-relaxed">
            {weddingParty.sectionSubtitle}
          </p>

          {/* Segmented Tab Filter */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white/80 border border-[#E8DFD1] shadow-card mt-8">
            <button
              onClick={() => handleTabChange('bridesmaids')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeTab === 'bridesmaids'
                  ? 'bg-[#4A3F35] text-[#FAF7F2] shadow-sm'
                  : 'text-[#8C7A6B] hover:text-[#4A3F35]'
              }`}
            >
              Bridesmaids (5)
            </button>
            <button
              onClick={() => handleTabChange('groomsmen')}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeTab === 'groomsmen'
                  ? 'bg-[#4A3F35] text-[#FAF7F2] shadow-sm'
                  : 'text-[#8C7A6B] hover:text-[#4A3F35]'
              }`}
            >
              Groomsmen (5)
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Controls: Prev & Next buttons */}
          <div className="hidden sm:flex items-center justify-between absolute top-1/2 -translate-y-1/2 -left-4 -right-4 z-10 pointer-events-none">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full bg-white/90 backdrop-blur-md border border-[#E8DFD1] shadow-soft text-[#4A3F35] pointer-events-auto transition-all ${
                currentIndex === 0
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-[#4A3F35] hover:text-white hover:scale-105 active:scale-95'
              }`}
              aria-label="Previous party members"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`p-3 rounded-full bg-white/90 backdrop-blur-md border border-[#E8DFD1] shadow-soft text-[#4A3F35] pointer-events-auto transition-all ${
                currentIndex >= maxIndex
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-[#4A3F35] hover:text-white hover:scale-105 active:scale-95'
              }`}
              aria-label="Next party members"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Swipeable Viewport */}
          <div
            className="overflow-hidden py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {currentMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="h-full bg-white rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-card hover:shadow-soft transition-all duration-300 flex flex-col group">
                    {/* Portrait Photo */}
                    <div className="relative h-72 sm:h-80 overflow-hidden bg-[#F5EFE6]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                      {/* Subtle gradient overlay at bottom of photo */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      {/* Badge overlay on image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-medium tracking-wider uppercase border border-white/20">
                          {member.role}
                        </span>
                        <span className="text-xs text-white/90 font-light">
                          {member.relation}
                        </span>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-2xl text-[#4A3F35] font-normal mb-2">
                          {member.name}
                        </h3>
                        <p className="text-[#6C5840] text-sm font-light leading-relaxed">
                          {member.blurb}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#E8DFD1]/60 flex items-center justify-between text-xs text-[#8C7A6B]">
                        <span className="italic">{weddingConfig.couple.monogram} Wedding Party</span>
                        <Heart className="w-3.5 h-3.5 text-[#C5A880]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Pagination Indicators / Controls */}
          <div className="flex items-center justify-center space-x-3 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="sm:hidden p-2 rounded-full border border-[#E8DFD1] text-[#4A3F35] disabled:opacity-30"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx
                    ? 'w-7 bg-[#4A3F35]'
                    : 'w-2 bg-[#D9C8B0] hover:bg-[#C4AE90]'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="sm:hidden p-2 rounded-full border border-[#E8DFD1] text-[#4A3F35] disabled:opacity-30"
              aria-label="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
