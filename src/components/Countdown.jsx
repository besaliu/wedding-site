import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../data/weddingConfig';
import { Heart } from 'lucide-react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const targetDate = new Date(weddingConfig.couple.countdownTarget).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown-section" className="py-12 bg-[#FAF7F2] border-b border-[#E8DFD1]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#8C7A6B] font-semibold mb-6">
          <Heart className="w-3.5 h-3.5 text-[#C5A880] fill-current" />
          <span>Counting Down The Moments</span>
          <Heart className="w-3.5 h-3.5 text-[#C5A880] fill-current" />
        </div>

        {timeLeft.isComplete ? (
          <div className="p-8 rounded-2xl bg-white shadow-soft border border-[#E8DFD1]">
            <h3 className="font-serif text-3xl text-[#4A3F35]">Today is the big day! 🎉</h3>
            <p className="text-[#8C7A6B] text-sm mt-2">We cannot wait to celebrate with you.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#E8DFD1] shadow-card hover:shadow-soft transition-all duration-300"
              >
                <div className="font-serif text-3xl sm:text-5xl text-[#4A3F35] font-light tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#8C7A6B] font-medium mt-1">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="mt-6 text-xs text-[#8C7A6B] tracking-wide italic">
          Until we say &quot;I do&quot; at {weddingConfig.logistics.venue.name}
        </p>
      </div>
    </section>
  );
}
