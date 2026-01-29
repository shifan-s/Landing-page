import React from "react";
import {
  UserSwitchOutlined,
  MenuFoldOutlined,
  StarOutlined,
} from "@ant-design/icons";

const About = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-4 py-16">

      {/* TOP CONTENT */}
      <div className="max-w-4xl flex flex-col items-center text-center">
        <h1 className="text-gray-200 font-bold text-4xl md:text-5xl mb-6">
          About Us
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mb-8 indent-4">
          Our achievement story stands as a powerful testament to teamwork and perseverance.
          United, we have faced challenges, celebrated victories, and woven a narrative of
          growth and success.
        </p>

        <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-md text-xl font-bold transition-all duration-300 flex items-center gap-3">
          Read More →
        </button>
      </div>

      {/* IMAGE + STATS */}
      <div className="relative mt-16 w-full max-w-6xl">

        {/* Image */}
        <img src={About.png} alt="Delicious Food" 
         className="w-full h-auto rounded-lg shadow-lg object-cover"
        />

        {/* Stats Box */}
        <div
          className="
            bg-gray-800/90 text-white shadow-2xl rounded-lg
            p-6 max-w-4xl mx-auto
            mt-8

            md:absolute md:left-1/2 md:-bottom-14
            md:-translate-x-1/2 md:mt-0
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div className="flex flex-col items-center">
              <UserSwitchOutlined className="text-3xl mb-2" />
              <span className="text-2xl font-semibold">7+</span>
              <span className="text-sm text-gray-300">
                Years of Experience
              </span>
            </div>

            <div className="flex flex-col items-center">
              <MenuFoldOutlined className="text-3xl mb-2" />
              <span className="text-2xl font-semibold">30+</span>
              <span className="text-sm text-gray-300">
                Dishes in our menu
              </span>
            </div>

            <div className="flex flex-col items-center">
              <StarOutlined className="text-3xl mb-2" />
              <span className="text-2xl font-semibold">500+</span>
              <span className="text-sm text-gray-300">
                Customer Reviews
              </span>
            </div>

            <div className="flex flex-col items-center">
              <UserSwitchOutlined className="text-3xl mb-2" />
              <span className="text-2xl font-semibold">10k+</span>
              <span className="text-sm text-gray-300">
                Happy Customers
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
