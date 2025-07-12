
import { motion } from "framer-motion";
import { Leaf, Droplets, Sparkles, Shield } from "lucide-react";

const Ingredients = () => {
  const ingredients = [
    {
      name: "Arnica",
      benefit: "Stimulates hair growth",
      description: "Known for its healing properties, Arnica promotes blood circulation to the scalp",
      icon: "🌼",
      color: "from-yellow-100 to-orange-100"
    },
    {
      name: "Jaborandi",
      benefit: "Prevents hair fall",
      description: "Rich in pilocarpine, this herb strengthens hair roots and reduces breakage",
      icon: "🌿",
      color: "from-green-100 to-teal-100"
    },
    {
      name: "Amla",
      benefit: "Rich in Vitamin C",
      description: "The superfood for hair, packed with antioxidants and essential nutrients",
      icon: "🫐",
      color: "from-purple-100 to-indigo-100"
    },
    {
      name: "Brahmi",
      benefit: "Nourishes scalp",
      description: "Ancient herb that improves blood circulation and strengthens hair follicles",
      icon: "🍃",
      color: "from-green-100 to-emerald-100"
    },
    {
      name: "Bhringraj",
      benefit: "King of hair herbs",
      description: "The ultimate hair tonic, known to reverse premature graying and hair loss",
      icon: "🌱",
      color: "from-lime-100 to-green-100"
    },
    {
      name: "Essential Oils",
      benefit: "Aromatic therapy",
      description: "Carefully selected oils that provide fragrance and additional nourishment",
      icon: "💧",
      color: "from-blue-100 to-cyan-100"
    }
  ];

  return (
    <section id="ingredients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pure <span className="text-green-600">Natural</span> Ingredients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every ingredient is carefully selected for its proven benefits in hair care. 
            We source only the finest herbs and oils to create our powerful formulations.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
              <Leaf className="text-green-600" size={16} />
              <span className="text-green-800 font-medium">100% Organic</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
              <Droplets className="text-blue-600" size={16} />
              <span className="text-blue-800 font-medium">Cold Pressed</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full">
              <Sparkles className="text-purple-600" size={16} />
              <span className="text-purple-800 font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full">
              <Shield className="text-amber-600" size={16} />
              <span className="text-amber-800 font-medium">Lab Tested</span>
            </div>
          </div>
        </motion.div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${ingredient.color} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full`}>
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-md mb-4">
                    <span className="text-3xl">{ingredient.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{ingredient.name}</h3>
                  <p className="text-green-600 font-semibold">{ingredient.benefit}</p>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-center leading-relaxed">
                  {ingredient.description}
                </p>

                {/* Decorative Elements */}
                <div className="mt-6 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience Natural Hair Care?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of satisfied customers who trust HOMAVEDA for their hair care needs
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Shop Our Products
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;
