
const Testimonial = () => {
  return (
    <section className="bg-gray-600 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-white mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="text-white italic">"The food was absolutely delicious and the service was outstanding!"</p>
            <p className="text-gray-400 mt-4">— John Doe</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="text-white italic">"Best dining experience I've ever had. Highly recommend!"</p>
            <p className="text-gray-400 mt-4">— Jane Smith</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <p className="text-white italic">"The ambiance and flavors are unmatched. Will definitely come back."</p>
            <p className="text-gray-400 mt-4">— Michael Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;