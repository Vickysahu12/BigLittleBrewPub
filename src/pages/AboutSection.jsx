import React from "react";
import mainImage from "../assets/image/sip.jpg";
import AnimatedSection from "../components/AnimatedSection";

const AboutSection = () => {
  return (
    <AnimatedSection>
    <section className="bg-white py-12 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            𝙰𝚋𝚘𝚞𝚝 𝚄𝚜
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#8B5E3C] mb-4">
            Our Story & Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We’re a small, independent café built on big-hearted values — good food,
            good coffee, and genuine community spirit.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            What started as a simple idea — to create a space where people feel at ease —
            has grown into a local favourite where friends meet, visitors pause, and
            regulars return again and again. Our menu is rooted in quality ingredients and
            honest preparation, with no frills or fuss — just satisfying plates and a
            friendly atmosphere.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether you’re here for a quick bite or a long catch-up, we hope you feel
            right at home.
          </p>
          <a
            href="#about"
            className="inline-block border border-[#8B5E3C] text-[#8B5E3C] px-6 py-2 rounded hover:bg-[#8B5E3C] hover:text-white transition duration-300"
          >
            𝙰𝚋𝚘𝚞𝚝 𝚄𝚜
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative flex justify-center">
          <img
            src={mainImage}
            alt="Cafe Front"
            className="rounded-lg shadow-lg w-full lg:w-[80%] object-cover"
          />
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default AboutSection;
