import React from 'react'
import Testimonial from './Testimonial'

const Services = () => {
  return (
    <div className="bg-gray-600 min-h-screen px-4 py-16">
      {/* HEADER SECTION */}
      <div>
        <h1 className="flex justify-center items-center text-gray-300 text-4xl md:text-5xl text-center"> 
          Crafting Moments, Serving You 
        </h1>
        <p className="max-w-2xl text-gray-300 mt-6 mx-auto text-center">
          From unforgettable flavors to seamless service, we're here to make every meal feel special. 
          Whether you dine in, take out, or order online we’ve got your cravings covered.
        </p>
      </div>

      {/* SERVICE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">

        {/* 1st Column */}
        <div className="bg-gray-800 rounded-tl-3xl overflow-hidden flex flex-col">
          <img 
            src="/src/assets/buffet.png" 
            alt="Buffet" 
            className="w-full h-56 object-cover"
          />
          <div className="p-6 flex flex-col flex-1 text-left">
            <h3 className="text-white text-xl mb-3">Buffet Services</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Navigate effortlessly with our intuitive design, optimized for all devices.
              Enjoy a seamless experience whether you're on desktop or mobile.
            </p>
            <button className="mt-auto self-start bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
              Read More →
            </button>
          </div>
        </div>

        {/* 2nd Column */}
        <div className="bg-gray-800 overflow-hidden flex flex-col">
          <img 
            src="/src/assets/food-del.png" 
            alt="Food Delivery" 
            className="w-full h-56 object-cover"
          />
          <div className="p-6 flex flex-col flex-1 text-left">
            <h3 className="text-white text-xl mb-3">Food Delivery</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Enjoy a safe ordering experience with fast delivery and secure payment
              options, bringing delicious meals right to your doorstep.
            </p>
            <button className="mt-auto self-start bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
              Read More →
            </button>
          </div>
        </div>

        {/* 3rd Column */}
        <div className="bg-gray-800 rounded-br-3xl overflow-hidden flex flex-col">
          <img 
            src="/src/assets/cafteria.png" 
            alt="Cafeteria" 
            className="w-full h-56 object-cover"
          />
          <div className="p-6 flex flex-col flex-1 text-left">
            <h3 className="text-white text-xl mb-3">Cafeteria</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Relax and enjoy freshly brewed coffee and snacks in a cozy atmosphere
              designed for comfort and great conversations.
            </p>
            <button className="mt-auto self-start bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className='bg-black text-white mt-20 flex flex-col'>
        <Testimonial/>
      </div>

      {/* ORDER NOW SECTION */}
      <section className="w-full min-h-screen bg-[#161122] flex items-center justify-center py-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-primary/6 to-error/6 p-8 lg:p-16 w-full max-w-7xl">
          <div
            className="relative bg-[#332d45]
                       rounded-3xl border border-purple-500/30
                       flex flex-col lg:flex-row items-center
                       px-10 py-12 overflow-hidden"
          >
            {/* LEFT CONTENT */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-4">
                Order Now & Satisfy Your Cravings
              </h2>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Let us bring the flavors you love straight to your door. From classic
                comfort dishes to chef-curated specials, every bite is made with care
                and delivered fresh. Skip the wait — your next favorite meal is just a
                click away.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button
                  className="bg-purple-600 hover:bg-purple-700
                             text-white px-5 py-2.5 rounded-md
                             text-sm font-medium transition"
                >
                  Read More →
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE - Hidden on small screens (hidden), shown on large (lg:block) */}
            <div className="hidden lg:block relative mt-10 lg:mt-3 lg:ml-auto">
              <img
                src="/src/assets/pizza.png"
                alt="Pizza"
                className="w-[310px] md:w-[380px] lg:w-[420px] translate-x-6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services