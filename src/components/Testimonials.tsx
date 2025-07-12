
import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      review: "I've been using HOMAVEDA hair oil for 3 months now, and the results are amazing! My hair fall has reduced significantly, and my hair feels so much stronger and shinier.",
      product: "Hair Oil",
      avatar: "👩"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      rating: 5,
      review: "As someone who was skeptical about herbal products, HOMAVEDA completely changed my perspective. The shampoo is gentle yet effective, and I love that it's chemical-free.",
      product: "Shampoo",
      avatar: "👨"
    },
    {
      name: "Anitha Reddy",
      location: "Bangalore, India",
      rating: 5,
      review: "Dr. Wellness's expertise really shows in these products. The combination of hair oil and shampoo has transformed my dull, lifeless hair into healthy, bouncy curls!",
      product: "Complete Set",
      avatar: "👩‍🦱"
    },
    {
      name: "Vikram Singh",
      location: "Pune, India",
      rating: 5,
      review: "Being a fitness enthusiast, I wash my hair frequently. HOMAVEDA shampoo doesn't strip my hair of natural oils like other shampoos. Highly recommended!",
      product: "Shampoo",
      avatar: "👨‍💼"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, India",
      rating: 5,
      review: "The aroma of the hair oil is so soothing and natural. It's become a part of my weekly self-care routine. My hair has never looked better!",
      product: "Hair Oil",
      avatar: "👩‍🌾"
    },
    {
      name: "Arjun Menon",
      location: "Kerala, India",
      rating: 5,
      review: "I was dealing with premature graying and hair thinning. After using HOMAVEDA products for 4 months, I can see new hair growth and my existing hair is much healthier.",
      product: "Complete Set",
      avatar: "👨‍🎓"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-600">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers have to say about their HOMAVEDA experience.
          </p>
        </motion.div>

        {/* Overall Rating Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={24} />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Based on 500+ reviews</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-green-300 opacity-50" size={32} />
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.review}"
                </p>

                {/* Product Used */}
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.product}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Repeat Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600">5-Star Reviews</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Join Our Happy Customers
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
