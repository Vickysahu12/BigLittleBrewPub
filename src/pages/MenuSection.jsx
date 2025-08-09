import React from 'react';
import BreakfastImage from '../assets/image/menu1.jpg';
import LunchImage from '../assets/image/menu2.jpg';
import SandwichesImage from '../assets/image/menu3.jpg';
import AnimatedSection from '../components/AnimatedSection';

const MenuSection = () => {
  const menuItems = [
    { title: "Breakfast Menu", img: BreakfastImage, link: "#" },
    { title: "Light Lunches Menu", img: LunchImage, link: "#" },
    { title: "Drinks / Panini", img: SandwichesImage, link: "#" }
  ];

  return (
    <AnimatedSection>
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Heading */}
        <p className="text-sm tracking-widest uppercase text-gray-500 font-medium">
          𝙾𝚄𝚁 𝙼𝙴𝙽𝚄
        </p>
        <h2 className="mt-2 text-4xl sm:text-5xl font-playfair font-bold text-[#596528]">
          Serve the Taste You Remember
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Feeling peckish? You've come to the right place. As big foodies, we're passionate about 
          serving up fresh, delicious food made from locally sourced ingredients wherever possible.
        </p>

        {/* Menu Items */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md transition-all duration-500 ease-out transform group-hover:scale-105 group-hover:shadow-xl">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-800 font-playfair group-hover:text-[#596528] transition-colors duration-300">
                {item.title}
              </h3>
              <span className="mt-2 text-gray-500 group-hover:text-[#596528] transition-colors duration-300">
                𝚅𝚒𝚎𝚠 𝙼𝚎𝚗𝚞 ›
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
    </AnimatedSection>
  );
};

export default MenuSection;
