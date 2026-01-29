import React from "react";
import GetinTouch from "./GetinTouch";
import chef2Img from '../assets/chef-2.png';
import ladyImg from '../assets/lady.png';
import chef4Img from '../assets/chef-4.png';
import lady2Img from '../assets/lady-2.png';
const Teams = () => {
  return (
    <section className="bg-[#3f4654] py-20">
      {/* Heading */}
      <div className="text-center text-gray-200 mb-16 px-4">
        <h1 className="text-4xl font-semibold mb-4">
          Get to Know Our Amazing Team
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Meet the Passionate Experts Behind Our Success and Learn More About Their Roles.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* CARD */}
        <div className="bg-[#2f3441] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500 transition">
          
          {/* Image */}
          <div className="h-64 overflow-hidden">
          <img
         src={ladyImg}
         alt="Cheyenne Workman"
         className="w-full h-full object-cover bg-black rounded-xl"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-gray-300">
            <h2 className="text-lg font-semibold text-white">
              Cheyenne Workman
            </h2>

            {/* underline */}
            <div className="w-96 h-1 bg-gray-400 my-3 rounded-fulll"></div>

            <h3 className="text-xl mb-2">Head Chef</h3>

            <p className="text-sm leading-relaxed">
              A visionary leader driving innovation and collaboration.
            </p>
          </div>
        </div>

        {/* Duplicate card & change image/content */}
        <div className="bg-[#2f3441] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500 transition">
          <div className="h-64 overflow-hidden">
         <img
           src={chef2Img}
          alt="Corey Rosser"
         className="w-full h-full object-cover bg-black rounded-xl"
            />
          </div>
          <div className="p-6 text-gray-300">
            <h2 className="text-lg font-semibold text-white">Corey Rosser</h2>
            <div className="w-96 h-1 bg-gray-400 my-3 rounded-fulll"></div>
            <h3 className="text-xl   mb-2">Kitchen Manager</h3>
            <p className="text-sm">
              Leading teams to deliver excellence and consistency.
            </p>
          </div>
        </div>

        <div className="bg-[#2f3441] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500 transition">
          <div className="h-64 overflow-hidden">
           <img
           src={lady2Img}
         alt="Marilyn Westervelt"
               className="w-full h-full object-cover bg-black rounded-xl"
              />
          </div>
          <div className="p-6 text-gray-300">
            <h2 className="text-lg font-semibold text-white">Marilyn Westervelt</h2>
            <div className="w-96 h-1 bg-gray-400 my-3 rounded-full"></div>
            <h3 className="text-xl mb-2">Sous Chef</h3>
            <p className="text-sm">
              Ensures smooth operations and customer happiness.
            </p>
          </div>
        </div>

        <div className="bg-[#2f3441] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500 transition">
          <div className="h-64 overflow-hidden">
           <img
       src={chef4Img}
          alt="Ryan Passaquindici Arcand"
          className="w-full h-full object-cover bg-black rounded-xl"
               />
          </div>
          <div className="p-6 text-gray-300">
            <h2 className="text-lg font-semibold text-white">
              Ryan Passaquindici
            </h2>
            <div className="w-96 h-1 bg-gray-400 my-3 rounded-full"></div>
            <h3 className="text-xl mb-2">Food Stylist</h3>
            <p className="text-sm">
              Creates visually stunning and mouth-watering food.
            </p>
          </div>
        </div>


      </div>
      <div className="mt-20 bg-gray-800">
    <GetinTouch/>
</div>
    </section>
  );
};

export default Teams;
