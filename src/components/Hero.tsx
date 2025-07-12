import { motion } from "framer-motion";
import { Leaf, Star, Shield } from "lucide-react";

const Hero = () => {
    const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-0 overflow-hidden">
      {/* Header */}
      <header className="bg-green-900 text-white py-4 px-4 sm:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold text-green-300">HOMAVEDA</h2>
          <div className="flex space-x-4">
            <button className="text-white hover:text-green-200">Cart</button>
            <button className="text-white hover:text-green-200">Menu</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="flex flex-col lg:flex-row gap-8 items-center py-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 w-full"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                <span className="text-green-800">HOMAVEDA</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-medium">
                  Nature's Cure for Strong, Shiny Hair
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-md"
              >
                Discover the power of homeopathy with our handcrafted hair care products. 
                Made with love, backed by science, trusted by nature.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                <Leaf className="text-green-600" size={20} />
                <span className="text-green-800 font-medium">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full">
                <Star className="text-amber-600" size={20} />
                <span className="text-amber-800 font-medium">Doctor Backed</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <Shield className="text-blue-600" size={20} />
                <span className="text-blue-800 font-medium">Chemical Free</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={scrollToProducts}
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto"
              >
                Shop Products
              </button>
              {/* <button 
                onClick={scrollToAbout}
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-200 w-full sm:w-auto"
              >
                Learn More
              </button> */}
            </motion.div>
          </motion.div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Main Product Image Placeholder */}
              <div className="w-full h-64 sm:h-80 lg:h-[500px] bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-green-200 rounded-full flex items-center justify-center mx-auto">
                    <Leaf size={40} className="text-green-700" />
                  </div>
                  <p className="text-green-800 font-semibold text-base sm:text-lg">Hair Oil & Shampoo</p>
                  <p className="text-green-600 text-sm sm:text-base">Premium Natural Collection</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
              >
                <Star className="text-amber-500" size={16} />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg"
              >
                <Leaf className="text-green-500" size={16} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-green-800">
          <Leaf size={80} />
        </div>
        <div className="absolute top-32 right-20 text-green-600">
          <Leaf size={60} />
        </div>
        <div className="absolute bottom-40 left-32 text-green-700">
          <Leaf size={50} />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;