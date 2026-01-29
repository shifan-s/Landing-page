import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gray-600 sticky top-0 z-50">
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

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 mx-auto md:text-lg">
          {["/", "/about", "/services", "/teams", "/faqs"].map((path, i) => {
            const labels = ["Home", "About Us", "Services", "Teams", "FAQs"];
            return (
              <li key={path}>
                <Link
                  to={path}
                  className="text-white hover:text-blue-400 transition"
                >
                  {labels[i]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP BUTTON */}
        <Link
          to="/getintouch"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Book a Table
        </Link>

        {/* MOBILE RIGHT SIDE */}
        <div className="flex items-center gap-4 ml-auto md:hidden">
          {/* Book first */}
          <Link
            to="/getintouch"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Book
          </Link>

          {/* Menu icon */}
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-gray-700 px-6 pb-6 pt-2 space-y-4 text-lg">
          <Link onClick={() => setOpen(false)} to="/" className="block text-white">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block text-white">
            About Us
          </Link>
          <Link onClick={() => setOpen(false)} to="/services" className="block text-white">
            Services
          </Link>
          <Link onClick={() => setOpen(false)} to="/teams" className="block text-white">
            Teams
          </Link>
          <Link onClick={() => setOpen(false)} to="/faqs" className="block text-white">
            FAQs
          </Link>
        </div>
      )}

      {/* Underline */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
    </header>
  );
};

export default Navbar;
