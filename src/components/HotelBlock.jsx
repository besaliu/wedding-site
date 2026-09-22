import React, { useState } from 'react';
import { Building, Copy, Check, ExternalLink, Bus, Calendar, Phone } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function HotelBlock() {
  const { hotelBlock } = weddingConfig;
  const [copiedCode, setCopiedCode] = useState(false);

  const copyGroupCode = () => {
    navigator.clipboard.writeText(hotelBlock.groupCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section id="hotel" className="py-20 lg:py-24 bg-[#F4EFE6]/50 border-t border-[#E8DFD1]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#8C7A6B] font-semibold mb-3">
            <Building className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Where To Stay</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3F35] font-normal tracking-wide">
            {hotelBlock.sectionTitle}
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto my-4" />
          <p className="text-[#6C5840] text-sm sm:text-base font-light leading-relaxed">
            {hotelBlock.sectionSubtitle}
          </p>
        </div>

        {/* Hotel Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD1] shadow-card hover:shadow-soft transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8DFD1] text-[#8C7A6B] text-xs uppercase tracking-wider font-semibold">
                <span>Official Partner Hotel</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#4A3F35] font-normal">
                {hotelBlock.hotelName}
              </h3>

              <p className="text-[#6C5840] text-sm font-light">
                {hotelBlock.address}
              </p>

              <p className="text-[#6C5840] text-sm font-light leading-relaxed pt-2">
                {hotelBlock.instructions}
              </p>

              {/* Shuttle Callout */}
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]/80 mt-4">
                <Bus className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <div className="text-xs text-[#6C5840] font-light leading-relaxed">
                  <span className="font-medium text-[#4A3F35]">Complimentary Shuttle: </span>
                  {hotelBlock.shuttleInfo}
                </div>
              </div>
            </div>

            {/* Right Booking Details Column */}
            <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8DFD1] flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-1">
                  Special Group Rate
                </div>
                <div className="font-serif text-2xl sm:text-3xl text-[#4A3F35] font-normal">
                  {hotelBlock.rate}
                </div>

                <div className="flex items-center space-x-2 text-xs text-[#8C7A6B] mt-2">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Book by {hotelBlock.cutoffDate}</span>
                </div>
              </div>

              {/* Group Code Copy Box */}
              <div className="space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-semibold block">
                  Discount Group Code
                </span>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E8DFD1]">
                  <span className="font-mono text-sm font-bold text-[#4A3F35] tracking-widest pl-2">
                    {hotelBlock.groupCode}
                  </span>
                  <button
                    onClick={copyGroupCode}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#F4EFE6] text-[#4A3F35] text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <a
                  href={hotelBlock.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-[#4A3F35] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#32281D] transition-colors shadow-sm"
                >
                  <span>Book Online With Group Rate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {hotelBlock.phone && (
                  <div className="text-center text-xs text-[#8C7A6B]">
                    Or call reservation desk:{' '}
                    <a href={`tel:${hotelBlock.phone}`} className="underline hover:text-[#4A3F35]">
                      {hotelBlock.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
