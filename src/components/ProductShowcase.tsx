
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Heart, Star } from "lucide-react";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Homaveda Hair Oil",
      subtitle: "Nourishing Herbal Blend",
      price: "₹899",
      originalPrice: "₹1,299",
      rating: 4.8,
      reviews: 156,
      features: ["Arnica & Jaborandi", "Prevents Hair Fall", "100ml Premium Bottle"],
      image: "oil"
    },
    {
      id: 2,
      name: "Homaveda Shampoo",
      subtitle: "Gentle Cleansing Formula",
      price: "₹649",
      originalPrice: "₹899",
      rating: 4.9,
      reviews: 203,
      features: ["Amla & Brahmi", "Chemical Free", "200ml Natural Formula"],
      image: "shampoo"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Premium</span> Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handcrafted with ancient homeopathic wisdom and modern care. 
            Each product is made with love and tested for purity.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                {/* Product Image Placeholder */}
                <div className="relative mb-6">
                  <div className="w-full h-64 bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">
                          {product.image === 'oil' ? '🫒' : '🧴'}
                        </span>
                      </div>
                      <p className="text-green-700 font-medium">{product.image === 'oil' ? 'Hair Oil' : 'Shampoo'}</p>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors">
                      <Heart size={18} className="text-gray-600 hover:text-red-500" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors">
                      <Eye size={18} className="text-gray-600 hover:text-green-600" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-green-600 font-medium">{product.subtitle}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) 
                            ? "text-yellow-400 fill-current" 
                            : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-green-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                      SAVE {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}%
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <ShoppingCart size={18} />
                      <span>Add to Cart</span>
                    </button>
                    <button className="bg-amber-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-amber-600 transition-colors duration-200">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Free Shipping Above ₹999</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Trusted by 10,000+ Customers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
