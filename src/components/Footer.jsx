import React, { useState, useEffect } from "react";
import { Disc, Twitter, Github, ChevronUp } from "lucide-react";

const Footer = () => {
  // 1. Logic for Scroll to Top (placed BEFORE the return)
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#1a1625] border-t border-gray-800 pt-12 pb-6 px-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-purple-600 p-2 rounded-lg">
              <div className="w-5 h-5 border-2 border-white rotate-45 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-white">Restaurant</span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 text-gray-400 font-medium">
            {["About", "Services", "Team", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group py-1"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 text-gray-400">
            <Disc className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Github className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800 text-sm text-gray-500">
          ©2025 <span className="text-purple-500">FlyonUI</span>, Made With ❤️ for
          better web • Distributed by{" "}
          <span className="text-purple-500">ThemeWagon</span>
        </div>
      </div>

      {/* 2. Scroll to Top Button (Fixed positioning makes it float in the corner) */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-gray-800/90 p-3 rounded-full hover:bg-gray-700 transition-all shadow-2xl z-[100] border border-gray-700 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-purple-500 transition-colors" />
        </button>
      )}
    </footer>
  );
};

export default Footer;