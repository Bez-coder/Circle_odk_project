import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Circle.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
   <nav
  className={`fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? "text-[#203e7c] bg-[#203e7c]/25 backdrop-blur shadow-md"
      : "text-white bg-[#203e7c]"
  }`}
>

      <div className="w-full px-8 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Circle Data Logo" className="h-10 w-auto mr-2" />
          <span className="font-bold text-lg">Circle Data</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/features" className="hover:text-blue-500">Features</Link></li>
          <li><Link to="/pricing" className="hover:text-blue-500">Pricing</Link></li>
          <li><Link to="/signup" className="hover:text-blue-500">Sign Up</Link></li>
          <li><Link to="/login" className="hover:text-blue-500">Login</Link></li>
          <p>📞 Phone:</p>
          <li><Link to="/contactus" className="hover:text-blue-500">Contact Us</Link></li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
  <div className="fixed inset-0 z-40 flex justify-end md:hidden">
    <div className="w-4/5 max-w-xs h-full bg-white/95 px-8 py-6 flex flex-col justify-between overflow-y-auto shadow-lg">
      
      {/* Top Navigation Links */}
      <ul className="flex flex-col gap-8 text-lg text-[#203e7c] pt-4 pb-4">
        <li><Link to="/" className="hover:text-blue-200 border-b border-gray-300 pb-2" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-200 border-b border-gray-300 pb-2" onClick={toggleMobileMenu}>About</Link></li>
        <li><Link to="/features" className="hover:text-blue-200 border-b border-gray-300 pb-2" onClick={toggleMobileMenu}>Features</Link></li>
        <li><Link to="/pricing" className="hover:text-blue-200 border-b border-gray-300 pb-2" onClick={toggleMobileMenu}>Pricing</Link></li>
        <li className="flex items-center border-b border-gray-300 pb-2">
          <span className="mr-2">📞</span>
          <Link to="/contactus" className="hover:text-blue-200" onClick={toggleMobileMenu}>Contact Us</Link>
        </li>
      </ul>

      {/* Footer Links */}
      <div className="flex flex-col gap-4 text-lg text-[#203e7c] border-t border-gray-300 pt-6">
        <Link to="/signup" className="hover:text-blue-200" onClick={toggleMobileMenu}>Sign Up</Link>
        <Link to="/login" className="hover:text-blue-200" onClick={toggleMobileMenu}>Login</Link>
      </div>

    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;