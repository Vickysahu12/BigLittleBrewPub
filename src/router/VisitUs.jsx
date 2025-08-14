import React from 'react';
import Cafe from "../assets/image/cafeshop.webp"; // Background image

const VisitUs = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${Cafe})`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-pulse">
          📍 Coming Soon...
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300">
          Soon you’ll know exactly where to pull up, chill, and vibe with us.  
          <br />Until then, follow the smell of fresh coffee. ☕✨
        </p>
        <button className="mt-6 bg-[#b4937a] hover:bg-[#000] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
          Notify Me 📩
        </button>
      </div>
    </div>
  );
};

export default VisitUs;
