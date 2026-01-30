import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FoodImage from "../assets/foodyyyyyyyyyyy.jpg";
import { BellPlus, Hamburger, HeartMinus, Medal } from "lucide-react";
import { QuestionCircleFilled } from "@ant-design/icons";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const statsRef = useRef([]);
  const textRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  useEffect(() => {
    statsRef.current.forEach((el, index) => {
      if (el) {
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
      }
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

    [section2Ref, section3Ref, section4Ref, section5Ref].forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
            },
            duration: 1,
          }
        );
      }
    });
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
    <div className="bg-black text-white">
      {/* SECTION 1: Introduction */}
      <div className="py-16 md:py-20">
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
              Explore More
            </button>
          </div>

          {/* RIGHT SIDE → Stats */}
          <div
            className="
              flex-[1.5]
              grid grid-cols-2 gap-8
              px-10 mx-auto
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

      {/* SECTION 2: Our Story */}
      <div ref={section2Ref} className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our Stor<span className="text-red-600 text-5xl md:text-6xl font-extrabold">
                  Y
              </span>
              </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Founded in 2018, our restaurant began as a small dream to bring authentic and innovative cuisine to our community. What started with just a handful of dedicated team members has grown into a thriving establishment with multiple branches across the city. Our commitment to quality, freshness, and exceptional customer service has been the foundation of our success.
          </p>
        </div>
      </div>

      {/* SECTION 3: Our Mission & Values */}
      <div ref={section3Ref} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Mission & Values
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h4 className="text-2xl font-bold text-yellow-500 mb-4">Mission</h4>
              <p className="text-gray-300">
                To serve delicious, high-quality meals prepared with love and passion, while providing an exceptional dining experience that brings people together.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h4 className="text-2xl font-bold text-yellow-500 mb-4">Values</h4>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Quality in every dish</li>
                <li>✓ Respect for customers</li>
                <li>✓ Team excellence</li>
                <li>✓ Sustainability & freshness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Team & Expertise */}
      <div ref={section4Ref} className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Our Team
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-8">
            Our team consists of over 150 highly trained professionals, including award-winning chefs, hospitality experts, and dedicated staff members. Each team member brings unique skills and passion to ensure every guest experiences culinary excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {["Executive Chef", "Sous Chef", "Kitchen Manager"].map((role) => (
              <div key={role} className="bg-black p-6 rounded-lg text-center border border-yellow-500">
                <h5 className="text-xl font-bold text-yellow-500 mb-2">{role}</h5>
                <p className="text-gray-400">Expert culinary professionals</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 5: Why Choose Us */}
      <div ref={section5Ref} className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Choose Us <span className="text-6xl font saturate-200 text-red-700">?</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="text-3xl text-yellow-500">🍽️</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Premium Quality</h4>
                <p className="text-gray-300">Only the freshest ingredients sourced from trusted suppliers</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-yellow-500">👨‍🍳</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Expert Chefs</h4>
                <p className="text-gray-300">Culinary masterminds with international experience</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-yellow-500">🏆</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Consistency</h4>
                <p className="text-gray-300">Every dish meets our high standards of excellence</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-yellow-500">😊</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Customer First</h4>
                <p className="text-gray-300">24/7 support and personalized dining experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of About Page */}
        <div ref={section6Ref} className="py-16 md:py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 md:px-0 ">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Awards <Medal className="inline-block ml-2" />
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="text-3xl text-yellow-500"><Hamburger /></div>
              <div>
                <h4 className="text-xl font-bold mb-2">Simple & classy</h4>
                <p className="text-gray-300">We are a restaurant proud to have won multiple awards for exceptional hygiene standards and delicious, high-quality food.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-yellow-500"><HeartMinus /></div>
              <div>
                <h4 className="text-xl font-bold mb-2">More confident</h4>
                <p className="text-gray-300">Our restaurant has earned numerous awards for best hygiene, outstanding taste, and an unwavering commitment to quality.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-yellow-500"><BellPlus /></div>
              <div>
                <h4 className="text-xl font-bold mb-2">Warm & welcoming</h4>
                <p className="text-gray-300">Our warm and welcoming atmosphere makes every guest feel at home.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-yellow-500">x</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Premium / brand-style</h4>
                <p className="text-gray-300">Recognized for award-winning hygiene and mouth-watering flavors, our restaurant delivers an unforgettable dining experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
