import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#102b5a] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Circle Data is dedicated to delivering top-quality research and innovative solutions that drive impact across development sectors.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/features" className="hover:underline">Features</Link></li>
            <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link to="/contactus" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2"><FaPhone /> +251 904 112 288</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@circledata.org</li>
            <li className="flex gap-3 mt-2">
              <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
            </li>
          </ul>
        </div>

        {/* Developer & Policy */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Info</h3>
          <ul className="text-sm space-y-2">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/developer" className="hover:underline">Developer</Link></li>
            <li className="text-xs mt-4">© {new Date().getFullYear()} Circle Data. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
