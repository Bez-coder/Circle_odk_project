import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Circle.png";

const Nav2 = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200">
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">YourLogo</Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/signup"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded"
        >
          Join Now
        </Link>
        <Link
          to="/login"
          className="text-gray-700 font-medium hover:text-orange-500"
        >
          Sign In
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 font-medium hover:text-orange-500"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Nav2;