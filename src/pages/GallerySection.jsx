import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Optimized WebP images (ensure these are compressed)
import gallery1 from "../assets/image/gallery1.webp";
import gallery2 from "../assets/image/ga1.webp";
import gallery3 from "../assets/image/gallery3.webp";
import gallery4 from "../assets/image/gallery6.webp";
import gallery5 from "../assets/image/gallery5.webp";
import gallery6 from "../assets/image/ga3.webp";

const CoffeeGallery = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "50px" } // rootMargin for pre-loading slightly before viewport
    );

    imagesRef.current.forEach((img) => img && observer.observe(img));
    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { src: gallery2, alt: "Coffee brewing process" },
    { src: gallery3, alt: "Coffee beans close-up" },
    { src: gallery4, alt: "Latte art in a cup" },
    { src: gallery5, alt: "Freshly brewed coffee" },
  ];

  return (
    <section
      className="bg-[#241414] text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
      aria-labelledby="coffee-gallery-heading"
    >
      {/* Header */}
      <div className="container mx-auto text-center mb-12">
        <h2
          id="coffee-gallery-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Explore the Journey of Coffee, from Farm to Cup
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Each image tells a story — from handpicked beans to the warmth of a
          freshly brewed cup. Step into our gallery and discover the rich
          visuals of coffee’s journey.
        </p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto">
        {/* Left Tall Image */}
        <figure
          ref={(el) => (imagesRef.current[0] = el)}
          className="relative group overflow-hidden rounded-xl shadow-lg opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)] will-change-transform"
        >
          <img
            src={gallery1}
            alt="Coffee plantation scenic view"
            loading="eager"
            decoding="async"
            className="w-full h-[500px] object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
          />
          <figcaption className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500 text-lg font-medium text-[#e2b84c]">
            View More
          </figcaption>
        </figure>

        {/* Middle Grid */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {galleryImages.map((img, index) => (
            <figure
              key={index}
              ref={(el) => (imagesRef.current[index + 1] = el)}
              className="relative group overflow-hidden rounded-xl shadow-lg opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)] will-change-transform"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                width="400"
                height="240"
                className="w-full h-[240px] object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
              />
              <figcaption className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500 text-lg font-medium text-[#e2b84c]">
                View More
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Right Tall Image */}
        <figure
          ref={(el) => (imagesRef.current[galleryImages.length + 1] = el)}
          className="relative group overflow-hidden rounded-xl shadow-lg opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)] will-change-transform"
        >
          <img
            src={gallery6}
            alt="Barista pouring latte art"
            loading="eager"
            decoding="async"
            className="w-full h-[500px] object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
          />
          <figcaption className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500 text-lg font-medium text-[#e2b84c]">
            View More
          </figcaption>
        </figure>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          to="/Gallery"
          className="inline-block px-6 py-3 border border-[#e2b84c] rounded-full text-[#e2b84c] text-sm font-medium bg-transparent hover:bg-[#e2b84c]/20 hover:scale-105 transition-transform duration-300 ease-out"
        >
          𝙴𝚡𝚙𝚕𝚘𝚛𝚎 𝙵𝚞𝚕𝚕 𝙶𝚊𝚕𝚕𝚎𝚛𝚢
        </Link>
      </div>
    </section>
  );
};

export default CoffeeGallery;
