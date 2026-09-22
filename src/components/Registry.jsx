import React, { useState } from 'react';
import { Gift, Heart, Home, Plane, Copy, Check, ExternalLink, QrCode } from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function Registry() {
  const { registry } = weddingConfig;
  const [copiedHandle, setCopiedHandle] = useState(null);
  const [zoomedQr, setZoomedQr] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(id);
    setTimeout(() => setCopiedHandle(null), 2500);
  };

  const getFundIcon = (iconName) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#C5A880]" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-[#C5A880]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#C5A880]" />;
      default:
        return <Gift className="w-6 h-6 text-[#C5A880]" />;
    }
  };

  return (
    <section id="registry" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#8C7A6B] font-semibold mb-3">
            <Gift className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Celebrate With Us</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3F35] font-normal tracking-wide">
            {registry.sectionTitle}
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto my-4" />
          <p className="text-[#6C5840] text-sm sm:text-base font-light leading-relaxed">
            {registry.sectionSubtitle}
          </p>
        </div>

        {/* 3 Cash Funds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {registry.funds.map((fund) => (
            <div
              key={fund.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-card hover:shadow-soft transition-all duration-300 flex flex-col justify-between text-center group"
            >
              <div>
                {/* Fund Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD1] mx-auto flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {getFundIcon(fund.icon)}
                </div>

                {/* Fund Title */}
                <h3 className="font-serif text-2xl text-[#4A3F35] font-normal mb-2">
                  {fund.title}
                </h3>

                <p className="text-[#6C5840] text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {fund.tagline}
                </p>

                {/* QR Code Container */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD1] inline-block mb-6 relative">
                  <img
                    src={fund.qrCodeUrl}
                    alt={`${fund.title} QR Code`}
                    className="w-40 h-40 object-contain mx-auto rounded-lg"
                    loading="lazy"
                  />
                  <div className="text-[10px] uppercase tracking-wider text-[#8C7A6B] mt-2 font-medium">
                    Scan with camera or payment app
                  </div>
                </div>

                {/* Handles & Copy Info */}
                <div className="space-y-2 mb-6 text-left">
                  {fund.venmoHandle && (
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]/60 text-xs">
                      <div>
                        <span className="text-[#8C7A6B] font-medium block text-[10px] uppercase">Venmo</span>
                        <span className="font-mono text-[#4A3F35] font-semibold">{fund.venmoHandle}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(fund.venmoHandle, `${fund.id}-venmo`)}
                        className="p-1.5 rounded-lg bg-white hover:bg-[#F4EFE6] text-[#4A3F35] transition-colors"
                        title="Copy Venmo handle"
                      >
                        {copiedHandle === `${fund.id}-venmo` ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-[#C5A880]" />
                        )}
                      </button>
                    </div>
                  )}

                  {fund.zelleInfo && (
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1]/60 text-xs">
                      <div>
                        <span className="text-[#8C7A6B] font-medium block text-[10px] uppercase">Zelle</span>
                        <span className="font-mono text-[#4A3F35] font-semibold text-[11px] truncate max-w-[170px] block">
                          {fund.zelleInfo}
                        </span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(fund.zelleInfo, `${fund.id}-zelle`)}
                        className="p-1.5 rounded-lg bg-white hover:bg-[#F4EFE6] text-[#4A3F35] transition-colors"
                        title="Copy Zelle email"
                      >
                        {copiedHandle === `${fund.id}-zelle` ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-[#C5A880]" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Deep Link Button */}
              <div className="space-y-2 pt-2 border-t border-[#E8DFD1]/60">
                <a
                  href={fund.venmoDeepLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-full bg-[#4A3F35] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#32281D] transition-colors shadow-sm"
                >
                  <span>Open In Venmo / App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-xs text-[#8C7A6B] italic">
          Having trouble scanning? Simply copy the handle above to send via your banking or Venmo application.
        </div>
      </div>
    </section>
  );
}
