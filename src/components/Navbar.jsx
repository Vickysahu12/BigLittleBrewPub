import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logooo2.png";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Left Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <Link to="/Menu" className="hover:text-brown-600">𝙼𝚎𝚗𝚞</Link>
            <Link to="/Gallery" className="hover:text-brown-600">𝙶𝚊𝚕𝚕𝚎𝚛𝚢</Link>
          </div>

          {/* Center Logo */}
          <div className="text-center">
            <Link to="/">
              <img
                src={logo}
                alt="cafe-Logo"
                className="h-30 w-auto mx-auto object-contain"
              />
            </Link>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <Link to="/Contact" className="hover:text-brown-600">𝙲𝚘𝚗𝚝𝚊𝚌𝚝</Link>
            <Link to="/VisitUs" className="hover:text-brown-600">𝚅𝚒𝚜𝚒𝚝 𝚄𝚜</Link>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar} aria-label="Open Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay (only mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <span className="font-bold text-lg text-brown-700">Café</span>
          <button onClick={closeSidebar} aria-label="Close Menu">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col mt-6 space-y-6 px-6">
          <Link to="/Menu" onClick={closeSidebar} className="text-base hover:text-brown-600">𝙼𝚎𝚗𝚞</Link>
          <Link to="/Gallery" onClick={closeSidebar} className="text-base hover:text-brown-600">𝙶𝚊𝚕𝚕𝚎𝚛𝚢</Link>
          <Link to="/Contact" onClick={closeSidebar} className="text-base hover:text-brown-600">𝙲𝚘𝚗𝚝𝚊𝚌𝚝</Link>
          <Link to="/VisitUs" onClick={closeSidebar} className="text-base hover:text-brown-600">𝚅𝚒𝚜𝚒𝚝 𝚄𝚜</Link>
          <Link
            to="/BookaSeat"
            onClick={closeSidebar}
            className="mt-4 bg-[#596528] text-white px-4 py-2 rounded-full font-semibold text-center transition"
          >
            𝙱𝚘𝚘𝚔 𝚊 𝚂𝚎𝚊𝚝
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
