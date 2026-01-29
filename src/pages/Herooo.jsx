import React from "react";
import FoodImg from "../assets/Food.png";

const Herooo = () => {
  return (
    <section className="bg-gray-600 flex flex-col items-center justify-center px-4 min-h-[calc(85vh-80px)] py-12 md:py-16 overflow-hidden">
      
      {/* Badge */}
      <div className="mt-8 md:mt-36">
        <h4 className="bg-black text-gray-400 px-6 py-3 rounded-full text-lg text-center">
          Serving food lovers since 2006 ❤️
        </h4>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center text-center max-w-3xl mt-6 md:mt-12">
        <h1 className="text-gray-300 text-4xl md:text-5xl">
          Savor Every Bite. Savor
        </h1>
        <h1 className="text-gray-300 underline text-4xl md:text-5xl mt-2">
          Every Moment
        </h1>

        <p className="mt-4 md:mt-6 text-gray-300 text-lg leading-relaxed">
          Welcome to a dining experience where flavor, freshness, and hospitality come together.
          Whether it's your first visit or your hundredth, every plate is made to impress.
        </p>

        <div className="flex justify-center mt-6 md:mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-md text-xl transition-all duration-300 flex items-center gap-3 group">
            Experience The Flavour
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>

      {/* IMAGE — RIGHT FIXED, LEFT CUT (MOBILE ONLY) */}
      <div className="mt-8 md:mt-12 w-full overflow-hidden">
        <div className="flex justify-end">
          <img
            src={FoodImg}
            alt="Delicious Food"
            className="
              w-[120%]
              max-w-none
              h-72
              object-cover
              rounded-3xl
              shadow-2xl

              md:w-[126%]
              md:h-auto
              md:rounded-lg
              md:shadow-lg
            "
          />
       
        </div>
      </div>

    </section>
  );
};

export default Herooo;
