import React from 'react';

const GetinTouch = () => {
  return (
    <div className="min-h-screen bg-[#1a1625] py-16 px-4 font-sans">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-gray-100 text-4xl md:text-5xl mb-4">
          Get in Touch to Reserve Your Table
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Whether you're planning a casual dinner or a special celebration, 
          we're here to make your experience seamless.
        </p>
      </div>

      {/* Main Reservation Card */}
      <div className="bg-[#241f31] max-w-5xl mx-auto rounded-2xl p-6 md:p-10 shadow-2xl border border-gray-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-white mb-8">Book a Table</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm ml-1">Your Name</label>
                  <div className="relative">
                    <input type="text" placeholder="Enter your name here..." className="w-full bg-[#1a1625]/50 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:border-purple-500 transition-all" />
                    <span className="absolute right-4 top-3.5 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm ml-1">Phone Number</label>
                  <div className="relative">
                    <input type="text" placeholder="+1 (212) 555-1234" className="w-full bg-[#1a1625]/50 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:border-purple-500 transition-all" />
                    <span className="absolute right-4 top-3.5 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm ml-1">Enter The Date</label>
                  <div className="relative">
                    <input type="text" placeholder="06/11/25" className="w-full bg-[#1a1625]/50 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:border-purple-500 transition-all" />
                    <span className="absolute right-4 top-3.5 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Time */}
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm ml-1">Enter Time</label>
                  <div className="relative">
                    <input type="text" placeholder="06:00:00" className="w-full bg-[#1a1625]/50 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:border-purple-500 transition-all" />
                    <span className="absolute right-4 top-3.5 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-sm ml-1">Message</label>
                <div className="relative">
                  <textarea placeholder="Enter your message" rows="4" className="w-full bg-[#1a1625]/50 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:border-purple-500 transition-all resize-none"></textarea>
                  <span className="absolute right-4 top-4 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </span>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#6344d4] hover:bg-[#7458e8] text-white font-semibold py-4 rounded-xl transition-all shadow-lg transform active:scale-[0.98]">
                Book a Reservation
              </button>
            </form>
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#2a2438] border border-gray-700/50 rounded-2xl p-8 text-center flex-1 flex flex-col justify-center">
              <h3 className="text-white text-xl  mb-4">Email/Phone</h3>
              <p className="text-gray-400 mb-1">johndoe@gmail.com</p>
              <p className="text-gray-400">+148 589 2001 2466</p>
            </div>

            <div className="bg-[#2a2438] border border-gray-700/50 rounded-2xl p-8 text-center flex-1 flex flex-col justify-center">
              <h3 className="text-white text-xl  mb-4">Our Location</h3>
              <address className="text-gray-400 not-italic leading-relaxed">
                Office 149,<br />
                450 South Brand Brooklyn<br />
                San Diego County,<br />
                CA 91905, USA
              </address>
            </div>

            <div className="text-center pt-2">
              <p className="text-gray-300 text-sm md:text-base">
                Opening Hours <span className="text-[#8b72e9] ">9AM - 11PM</span> Everyday
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;