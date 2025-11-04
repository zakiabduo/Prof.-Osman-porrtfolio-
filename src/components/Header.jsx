/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // 
import { Menu, X } from "lucide-react"; // 


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Education", to: "education" },
    { name: "Research", to: "research" },
    { name: "CV", to: "cv" },
    { name: "Contact", to: "contact" },
  ];

  // ✅ Close menu when resizing to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-6xl mx-auto px-2 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
        
        </h1>
        {/* ---------- Desktop Navigation ---------- */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-70}
              spy={true}
              activeClass="text-indigo-600 font-semibold"
              className="cursor-pointer hover:text-indigo-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ---------- Mobile Menu Button ---------- */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-gray-800 cursor-pointer"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ---------- Mobile Navigation Menu ---------- */}
      <div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white border-t overflow-hidden`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-70}
            className="block px-6 py-3 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 transition"
            onClick={() => setMenuOpen(false)} // ✅ Close menu on click
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
