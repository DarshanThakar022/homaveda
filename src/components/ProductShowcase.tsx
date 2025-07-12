import { motion } from "framer-motion";
import { ShoppingCart, Eye, Heart, Star } from "lucide-react";
import { useState } from "react";

// Import local images (replace with your actual file paths)
import hairOilImage from '../assets/hair_oil.jpg'; // Adjust path to your image
import shampooImage from '../assets/shampoo.jpg'; // Adjust path to your image
import conditionerImage from '../assets/conditioner.jpg'; // Adjust path to your image

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  features: string[];
  image: string;
}

interface ProductShowcaseProps {
  onAddToCart: (product: { id: number; name: string; price: string; image: string }) => void;
}

const ProductShowcase = ({ onAddToCart }: ProductShowcaseProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Homaveda Hair Oil",
      subtitle: "Nourishing Herbal Blend",
      price: "₹899",
      originalPrice: "₹1,299",
      rating: 4.8,
      reviews: 156,
      features: ["Arnica & Jaborandi", "Prevents Hair Fall", "100ml Premium Bottle"],
      image: hairOilImage
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
      image: shampooImage
    },
    {
      id: 3,
      name: "Homaveda Conditioner",
      subtitle: "Hydrating Natural Care",
      price: "₹749",
      originalPrice: "₹1,099",
      rating: 4.7,
      reviews: 120,
      features: ["Aloe Vera & Neem", "Repairs Damage", "150ml Gentle Formula"],
      image: conditionerImage
    }
  ];

  const handleAddToCart = (product: Product) => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    alert(`${product.name} added to cart!`);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const viewProduct = (productId: number) => {
    const product = products.find(p => p.id === productId);
    alert(`Viewing details for ${product?.name}`);
  };

  return (
    <section id="products" className="pt-8 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Our <span className="text-green-600">Premium</span> Collection
          </h2>
          <p className="text-sm lg:text-base text-gray-600 max-w-xl mx-auto">
            Handcrafted with ancient homeopathic wisdom and modern care. 
            Each product is made with love and tested for purity.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 max-w-xs mx-auto">
                {/* Product Image */}
                <div className="relative mb-2">
                  <div className="w-full h-40 rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-1 right-1 space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className="bg-white p-1.5 rounded-full shadow-md hover:bg-green-50 transition-colors"
                    >
                      <Heart 
                        size={16} 
                        className={`${favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'}`}
                      />
                    </button>
                    <button 
                      onClick={() => viewProduct(product.id)}
                      className="bg-white p-1.5 rounded-full shadow-md hover:bg-green-50 transition-colors"
                    >
                      <Eye size={16} className="text-gray-600 hover:text-green-600" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    <p className="text-green-600 font-medium text-xs">{product.subtitle}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < Math.floor(product.rating) 
                            ? "text-yellow-400 fill-current" 
                            : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-0.5">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center space-x-1">
                    <span className="text-xl font-bold text-green-600">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-1 py-0.5 rounded-full text-xs font-semibold">
                      SAVE {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}%
                    </span>
                  </div>

                  {/* Action Button - Only Add to Cart */}
                  <div className="pt-1">
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-green-600 text-white py-1.5 px-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-sm"
                    >
                      <ShoppingCart size={14} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;