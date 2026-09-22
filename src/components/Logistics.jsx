import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Car,
  Calendar,
  Download,
  ExternalLink,
  Sparkles,
  Utensils,
  Music,
  Check,
} from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';

export default function Logistics() {
  const { logistics, couple } = weddingConfig;
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const { title, description, location, startDate, endDate } = logistics.calendarEvent;
    const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    return `${base}&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
  };

  // Generate and download .ics iCalendar file
  const downloadIcsFile = () => {
    const { title, description, location, startDate, endDate } = logistics.calendarEvent;
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      `PRODID:-//${couple.groom} and ${couple.bride} Wedding//EN`,
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      `UID:wedding-${startDate}@ben-cristalyn-wedding.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${couple.groom.toLowerCase()}-${couple.bride.toLowerCase()}-wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarMenuOpen(false);
  };

  const copyAddress = () => {
    const fullAddress = `${logistics.venue.name}, ${logistics.venue.address}, ${logistics.venue.city}`;
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="logistics" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#8C7A6B] font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Plan Your Day</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3F35] font-normal tracking-wide">
            {logistics.sectionTitle}
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto my-4" />
          <p className="text-[#6C5840] text-sm sm:text-base font-light leading-relaxed">
            {logistics.sectionSubtitle}
          </p>
        </div>

        {/* Venue & Calendar Highlights Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Venue Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFD1] shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-2">
                <MapPin className="w-4 h-4" />
                <span>The Venue</span>
              </div>
              <h3 className="font-serif text-3xl text-[#4A3F35] font-normal mb-2">
                {logistics.venue.name}
              </h3>
              <p className="text-[#6C5840] text-base font-light">
                {logistics.venue.address}, {logistics.venue.city}
              </p>
              <p className="text-[#8C7A6B] text-xs font-light mt-3 leading-relaxed">
                {logistics.venue.note}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-[#E8DFD1]/60">
              <a
                href={logistics.venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#4A3F35] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#32281D] transition-colors shadow-sm"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={copyAddress}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full border border-[#E8DFD1] text-[#4A3F35] text-xs uppercase tracking-wider font-medium hover:bg-[#FAF7F2] transition-colors"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <span>Copy Address</span>
                )}
              </button>
            </div>
          </div>

          {/* Calendar & Date Card */}
          <div className="bg-[#F4EFE6]/70 rounded-2xl p-6 sm:p-8 border border-[#E8DFD1] shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-2">
                <Calendar className="w-4 h-4" />
                <span>Date & Timing</span>
              </div>
              <h3 className="font-serif text-2xl text-[#4A3F35] font-normal mb-1">
                {couple.weddingDate}
              </h3>
              <p className="text-[#6C5840] text-sm font-light">
                Ceremony begins promptly at {couple.ceremonyTime}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E8DFD1]/60 relative">
              <div className="relative">
                <button
                  onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-[#E8DFD1] text-[#4A3F35] text-xs uppercase tracking-wider font-semibold shadow-sm hover:bg-[#FAF7F2] transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Add To Calendar</span>
                </button>

                {/* Calendar Dropdown */}
                {calendarMenuOpen && (
                  <div className="absolute bottom-full mb-2 left-0 right-0 bg-white rounded-xl shadow-xl border border-[#E8DFD1] p-2 space-y-1 z-20 animate-in fade-in slide-in-from-bottom-2">
                    <a
                      href={getGoogleCalendarUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2.5 px-3 py-2 text-xs text-[#4A3F35] hover:bg-[#FAF7F2] rounded-lg transition-colors"
                      onClick={() => setCalendarMenuOpen(false)}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Google Calendar</span>
                    </a>
                    <button
                      onClick={downloadIcsFile}
                      className="w-full flex items-center space-x-2.5 px-3 py-2 text-xs text-[#4A3F35] hover:bg-[#FAF7F2] rounded-lg transition-colors text-left"
                    >
                      <Download className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Apple / Outlook (.ics file)</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Day-of Timeline Flow */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8DFD1] shadow-card">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3F35] font-normal">
              Day-Of Itinerary Flow
            </h3>
            <p className="text-[#8C7A6B] text-xs sm:text-sm font-light mt-2">
              Join us for every moment of this joyous day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logistics.schedule.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#FAF7F2]/80 border border-[#E8DFD1]/80 hover:bg-[#F4EFE6]/70 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-xl font-normal text-[#C5A880] tracking-wide">
                      {item.time}
                    </span>
                    <span className="p-1.5 rounded-full bg-white text-[#8C7A6B] border border-[#E8DFD1]/60">
                      {index === 0 && <Clock className="w-3.5 h-3.5" />}
                      {index === 1 && <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />}
                      {index === 2 && <Utensils className="w-3.5 h-3.5" />}
                      {index === 3 && <Utensils className="w-3.5 h-3.5 text-[#C5A880]" />}
                      {index === 4 && <Music className="w-3.5 h-3.5" />}
                      {index === 5 && <Sparkles className="w-3.5 h-3.5" />}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl text-[#4A3F35] font-normal mb-1">
                    {item.event}
                  </h4>
                  <div className="text-xs uppercase tracking-wider text-[#8C7A6B] font-medium mb-2">
                    {item.location}
                  </div>
                  <p className="text-[#6C5840] text-xs font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Parking & Transportation Callout */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#F4EFE6]/60 border border-[#E8DFD1] flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="p-3 rounded-full bg-white text-[#4A3F35] shadow-sm flex-shrink-0">
              <Car className="w-5 h-5 text-[#C5A880]" />
            </div>
            <div>
              <h5 className="font-serif text-lg text-[#4A3F35] font-normal">
                Parking & Transportation
              </h5>
              <p className="text-[#6C5840] text-xs sm:text-sm font-light mt-0.5 leading-relaxed">
                {logistics.venue.parkingInfo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
