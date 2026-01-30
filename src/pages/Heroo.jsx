import React from "react";
import { UpOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Heroo = () => {
  return (
    <header className="w-full bg-gray-600 sticky top-0 z-50">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* Logo */}
       <div className="flex items-center gap-2">
              <div className="bg-purple-600 p-2 rounded-lg">
                <div className="w-5 h-5 border-2 border-white rotate-45 flex items-center justify-center">
                   <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-white">Restaurant</span>
            </div>

        {/* Menu */}
        <ul className="flex gap-8 mx-auto text-lg">
          <li><Link to="/" className="hover:text-blue-400 transition text-white">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition text-white">About Us</Link></li>
          <li><Link to="/services" className="hover:text-blue-400 transition text-white">Services</Link></li>
          <li><Link to="/teams" className="hover:text-blue-400 transition text-white">Teams</Link></li>
          <li><Link to="/faqs" className="hover:text-blue-400 transition text-white">FAQs</Link></li>
        </ul>

        {/* Button */}
        <Link
          to="/getintouch"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Book a Table
        </Link>
      </nav>

      {/* UNDERLINE */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>

    </header>
  );
};

export default Heroo;
