import React from 'react';
import Cafe from "../assets/image/cafe shop.jpg";
import alarm from "../assets/icon/alarm.png";
import location from "../assets/icon/location.png";
import viber from "../assets/icon/viber.png";
import AnimatedSection from '../components/AnimatedSection';

const HeroSection = () => {
  return (
    <AnimatedSection>
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${Cafe})`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-sm tracking-widest uppercase mb-2">Welcome to the</p>
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4">
          Big Little Brew Pub
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wide mb-8">
          BREAKFAST / LUNCH / TRAY-BAKES / COFFEE
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 text-sm font-medium uppercase border border-white bg-white hover:bg-[#000] transition duration-300 text-[#596528]"
        >
          𝙴𝚡𝚙𝚕𝚘𝚛𝚎 𝙼𝚎𝚗𝚞
        </a>
      </div>

      {/* Bottom Info Section */}
      {/* Bottom Info Section - Scrolling */}
<div className="absolute bottom-0 w-full bg-[#eab676] bg-opacity-70 text-white py-3 overflow-hidden">
  <div
    className="flex whitespace-nowrap"
    style={{
      animation: "scroll 20s linear infinite",
    }}
  >
    {/* Repeat content twice for seamless loop */}
    {[...Array(2)].map((_, idx) => (
      <div key={idx} className="flex items-center gap-12 px-6">
        {/* Location */}
        <div className="flex items-center gap-2">
          <img src={location} alt="Location" className="h-4 w-4" />
          <span className="text-sm md:text-base">
            6 Sandgate T015 IEP
          </span>
        </div>

        {/* Opening Hours */}
        <div className="flex items-center gap-2">
          <img src={alarm} alt="Opening Hours" className="h-4 w-4" />
          <span className="text-sm md:text-base">
            Mon - Sunday 10AM to 3PM
          </span>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-2">
          <img src={viber} alt="Phone" className="h-4 w-4" />
          <span className="text-sm md:text-base">
            +44 1259 807852 | queenshead@gmhotels.co.vk
          </span>
        </div>
      </div>
    ))}
  </div>

  <style>{`
    @keyframes scroll {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
</div>

    </div>
    </AnimatedSection>
  );
};

export default HeroSection;
