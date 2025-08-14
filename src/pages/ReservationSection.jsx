import React from "react";
import bgImage from "../assets/image/restro.webp"; // Background image
import AnimatedSection from "../components/AnimatedSection";

const BookASeat = () => {
  return (
    <AnimatedSection>
      <section className="relative py-20 px-6 md:px-12 lg:px-20">
        {/* Background Image - Lazy Loaded */}
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform will-change-opacity animate-fadeIn"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundAttachment: "fixed", // gives nice parallax feel on desktop
          }}
        >
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="text-white animate-fadeIn will-change-transform will-change-opacity"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              Reserve Your Cozy Spot ☕
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Whether it’s a morning coffee with friends or a relaxing evening
              with your favorite brew, make sure your seat is waiting for you.
              Book now and let us serve you the perfect experience.
            </p>
          </div>

          {/* Booking Form */}
          <div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl p-8 w-full max-w-md mx-auto animate-fadeIn"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-md bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e2b84c] outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-md bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e2b84c] outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-md bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e2b84c] outline-none"
                required
              />
              <select
                className="w-full p-4 rounded-md bg-black/30 border border-white/20 text-white focus:ring-2 focus:ring-[#e2b84c] outline-none"
                required
              >
                <option value="">Number of Guests</option>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num} className="text-black">
                    {num}
                  </option>
                ))}
              </select>
              <input
                type="datetime-local"
                className="w-full p-4 rounded-md bg-black/30 border border-white/20 text-white focus:ring-2 focus:ring-[#e2b84c] outline-none"
                required
              />

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#d4b06c] to-[#e2b84c] text-black font-semibold rounded-md shadow-lg hover:scale-[1.02] transition-transform duration-300"
              >
                𝚁𝚎𝚜𝚎𝚛𝚟𝚎 𝙼𝚢 𝚂𝚎𝚊𝚝
              </button>
            </form>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default BookASeat;
