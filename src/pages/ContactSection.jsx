import React from "react";
import cafeImage from "../assets/image/restro1.jpg"; // apni image ka path
import AnimatedSection from "../components/AnimatedSection";

const ContactSection = () => {
  return (
    <AnimatedSection>
    <section className="relative w-full bg-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div
          className="space-y-5 animate-fadeIn"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#8b6c53]">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            6 Sandgate, Berwick upon Tweed TD15 1EP, Berwick, United Kingdom
          </p>

          <div className="text-gray-700 text-base md:text-lg space-y-1">
            <p>
              <a
                href="tel:+441289307852"
                className="hover:text-[#8b6c53] transition-colors duration-200"
              >
                +44 1289 307852
              </a>
            </p>
            <p>
              <a
                href="mailto:Queenshead@grhotels.co.uk"
                className="hover:text-[#8b6c53] transition-colors duration-200"
              >
                Queenshead@grhotels.co.uk
              </a>
            </p>
          </div>

          <p className="text-gray-700 text-base md:text-lg">
            Mon - Sunday: Served 10AM to 3PM
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#b4937a] hover:bg-[#9b7e63] text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            𝙾𝚙𝚎𝚗 𝙸𝚗 𝙼𝚊𝚙𝚜
          </a>
        </div>

        {/* Right Image */}
        <div
          className="relative overflow-hidden rounded-lg shadow-2xl group animate-fadeIn"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <img
            src={cafeImage}
            alt="Cafe Front"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          {/* Soft Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default ContactSection;
