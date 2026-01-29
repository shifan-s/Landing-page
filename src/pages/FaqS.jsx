import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MoveRight, } from 'lucide-react';

const FaqS = () => {
  const faqs = [
    { question: "Do you offer home delivery?", answer: "Yes, we do! You can place your order directly through our website or via trusted platforms like Swiggy and Zomato." },
    { question: "How can I book a table?", answer: "Booking a table is simple and quick. Just head over to our reservation page, choose your date and time, and confirm in a few clicks." },
    { question: "What are your opening hours?", answer: "We're open every day from 11:00 AM to 11:00 PM. On weekends, we serve a special brunch menu from 10:00 AM to 1:00 PM." },
    { question: "What are your payment options?", answer: "We offer several payment options including credit/debit cards, bank transfers, and online gateways for your convenience." },
    { question: "Do you offer vegan options?", answer: "Yes, we do! We offer a variety of vegan dishes including plant-based starters, mains, and even desserts." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => { if (currentIndex + 3 < faqs.length) setCurrentIndex(currentIndex + 1); };
  const prevSlide = () => { if (currentIndex > 0) setCurrentIndex(currentIndex - 1); };

  return (
    <div className="relative bg-[#1a1625] text-gray-300 min-h-screen flex flex-col font-sans">
      
      {/* FAQ Section */}
      <div className="flex-grow py-24 px-8 overflow-hidden relative">
        <div className="absolute top-10 left-10 text-8xl opacity-5 font-bold select-none text-purple-200">?</div>
        <div className="absolute top-10 right-10 text-8xl opacity-5 font-bold select-none text-purple-200">?</div>

        <div className="text-center mb-20 relative z-10">
          <h1 className="text-5xl font-semibold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Leverage artificial intelligence algorithms to provide users with valuable insights</p>
        </div>

        <div className="max-w-7xl mx-auto flex items-center gap-4 relative z-10">
          <button onClick={prevSlide} disabled={currentIndex === 0} className={`border border-purple-900/50 p-3 rounded-full ${currentIndex === 0 ? 'opacity-20' : 'hover:bg-purple-900/20 text-purple-500'}`}><ArrowLeft /></button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
            {faqs.slice(currentIndex, currentIndex + 3).map((faq, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-2xl border-2 border-transparent hover:border-blue-500 hover:bg-white/5 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 h-14 flex items-center text-center">{faq.question}</h3>
                <p className="text-gray-400 text-center text-sm mb-6">{faq.answer}</p>
                <button className="mt-auto flex items-center gap-2 text-purple-500 font-medium hover:text-purple-400">Learn more <MoveRight className="w-4 h-4" /></button>
              </div>
            ))}
          </div>

          <button onClick={nextSlide} disabled={currentIndex + 3 >= faqs.length} className={`border border-purple-900/50 p-3 rounded-full ${currentIndex + 3 >= faqs.length ? 'opacity-20' : 'hover:bg-purple-900/20 text-purple-500'}`}><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default FaqS;