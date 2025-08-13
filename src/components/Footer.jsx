import React from "react";
import logoImage from "../assets/image/logooo2.png";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <AnimatedSection>
    <footer className="bg-[#b4937a] text-white pt-12 pb-6 px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-center md:text-left">
        
        {/* Logo Section */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <img
            src={logoImage}
            alt="Cafe Logo"
            className="w-30 sm:w-32 md:w-40 object-contain mb-4"
            loading="lazy"
          />
        </div>

        {/* Opening Hours & Location */}
        <div>
          <h4 className="font-semibold mb-3">𝙾𝙿𝙴𝙽𝙸𝙽𝙶 𝙷𝙾𝚄𝚁𝚂</h4>
          <p className="text-base sm:text-sm leading-relaxed">𝙼𝚘𝚗 - 𝚂𝚞𝚗𝚍𝚊𝚢</p>
          <p className="text-base sm:text-sm leading-relaxed">𝚂𝚎𝚛𝚟𝚎𝚍 𝟷𝟶𝙰𝙼 𝚝𝚘 𝟹𝙿𝙼</p>

          <h4 className="font-semibold mt-5 mb-2">𝙻𝙾𝙲𝙰𝚃𝙸𝙾𝙽</h4>
          <p className="text-base sm:text-sm leading-relaxed">𝟼 𝚂𝚊𝚗𝚍𝚐𝚊𝚝𝚎 𝚃𝙳𝟷𝟻 𝟷𝙴𝙿</p>
        </div>

        {/* Cafe Links */}
        <div>
          <h4 className="font-semibold mb-3">𝙲𝙰𝙵𝙴</h4>
          <ul className="space-y-2 text-base sm:text-sm">
            <li><a href="#" className="hover:underline">𝙷𝚘𝚖𝚎</a></li>
            <li><a href="#" className="hover:underline">𝙰𝚋𝚘𝚞𝚝</a></li>
            <li><a href="#" className="hover:underline">𝙼𝚎𝚗𝚞</a></li>
            <li><a href="#" className="hover:underline">𝙷𝚒𝚛𝚎 𝚄𝚜</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">𝚀𝚄𝙸𝙲𝙺 𝙻𝙸𝙽𝙺𝚂</h4>
          <ul className="space-y-2 text-base sm:text-sm">
            <li><a href="#" className="hover:underline">𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝚄𝚜</a></li>
            <li><a href="#" className="hover:underline">𝙸𝚖𝚊𝚐𝚎 𝙶𝚊𝚕𝚕𝚎𝚛𝚢</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">𝚂𝙾𝙲𝙸𝙰𝙻</h4>
          <ul className="space-y-2 text-base sm:text-sm">
            <li><a href="#" className="hover:underline">𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔</a></li>
            <li><a href="#" className="hover:underline">𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖</a></li>
            <li><a href="#" className="hover:underline">𝚃𝚠𝚒𝚝𝚝𝚎𝚛</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-white/80 text-center md:text-left">
        <p className="mb-2 md:mb-0">© 𝙼𝚊𝚋𝚎𝚕𝚕 𝚌𝚊𝚏𝚎 𝟸𝟶𝟸𝟻. 𝙰𝚕𝚕 𝚁𝚒𝚐𝚑𝚝𝚜 𝚁𝚎𝚜𝚎𝚛𝚟𝚎𝚍</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">𝙿𝚛𝚒𝚟𝚊𝚌𝚢 𝙿𝚘𝚕𝚒𝚌𝚢</a>
          <a href="#" className="hover:underline">𝚃𝚎𝚛𝚖𝚜 𝚘𝚏 𝚄𝚜𝚎</a>
        </div>
      </div>
    </footer>
    </AnimatedSection>
  );
};

export default Footer;
