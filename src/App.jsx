import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';
import WeddingParty from './components/WeddingParty';
import Logistics from './components/Logistics';
import HotelBlock from './components/HotelBlock';
import Registry from './components/Registry';
import FAQ from './components/FAQ';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A3F35] selection:bg-[#E8DFD1] selection:text-[#2D2721]">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <OurStory />
        <WeddingParty />
        <Logistics />
        <HotelBlock />
        <Registry />
        <FAQ />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}
