import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FoodImage from "../assets/foodyyyyyyyyyyy.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const statsRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    statsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          duration: 0.8,
          delay: index * 0.15,
        }
      );
    });

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
          },
          duration: 1.2,
        }
      );
    }
  }, []);

  const stats = [
    { number: "7+", label: "Years of Excellence" },
    { number: "99+", label: "Delicious Dishes" },
    { number: "40+", label: "Branches" },
    { number: "1cr+", label: "Happy Customers" },
    { number: "150+", label: "Expert Chefs" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="bg-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-5 md:gap-10 px-4 md:px-0">

        {/* LEFT SIDE */}
        <div ref={textRef} className="flex-[3] flex flex-col gap-4 md:gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            About Us
          </h2>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Serving love on every plate! From traditional recipes to unique
            culinary creations, our restaurant has been delighting taste buds
            for over 7 years.
          </p>

          <img
            src={FoodImage}
            alt="Restaurant"
            className="rounded-xl w-full shadow-lg"
          />

          <button className="mt-4 px-6 py-2.5 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1">
            Read More
          </button>
        </div>

        {/* RIGHT SIDE → 2 COLUMNS ON MOBILE Screen*/}
       
   <div
        className="
          flex-[1.5]
          grid grid-cols-2 gap-8
          px-10 mx-auto        /* 📱 mobile → gap from right + center */
          md:px-0 md:mx-0
          md:flex md:flex-col md:gap-15
         items-center md:items-start
         text-center md:text-left">
  {stats.map((stat, i) => (
    <div key={i} ref={(el) => (statsRef.current[i] = el)}>
      <span className="text-3xl md:text-4xl font-extrabold text-yellow-500 block">
        {stat.number}
       </span>
       <p className="text-gray-200 text-sm md:text-base">
        {stat.label}
        </p>
              </div>
         ))}
       </div>

      </div>
    </div>
  );
};

export default About;
