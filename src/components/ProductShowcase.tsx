
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Heart, Star } from "lucide-react";
import { useState } from "react";

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
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop"
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
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop"
    }
  ];

  const handleAddToCart = (product: Product) => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    // Show success feedback
    alert(`${product.name} added to cart!`);
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const buyNow = (product: Product) => {
    // Add to cart first
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    // Then show checkout message
    alert(`Redirecting to checkout for ${product.name} - ${product.price}`);
  };

  const viewProduct = (productId: number) => {
    const product = products.find(p => p.id === productId);
    alert(`Viewing details for ${product?.name}`);
  };

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
                {/* Product Image */}
                <div className="relative mb-6">
                  <div className="w-full h-64 rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors"
                    >
                      <Heart 
                        size={18} 
                        className={`${favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-600 hover:text-red-500'}`}
                      />
                    </button>
                    <button 
                      onClick={() => viewProduct(product.id)}
                      className="bg-white p-2 rounded-full shadow-md hover:bg-green-50 transition-colors"
                    >
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
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-green-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart size={18} />
                      <span>Add to Cart</span>
                    </button>
                    <button 
                      onClick={() => buyNow(product)}
                      className="bg-amber-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-amber-600 transition-colors duration-200"
                    >
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
