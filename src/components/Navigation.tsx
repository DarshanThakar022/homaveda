import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ShoppingCart } from "lucide-react";

interface NavigationProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Navigation = ({ cartItemsCount, onCartClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <span className="text-3xl font-bold text-green-800">HOMAVEDA</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 hover:bg-green-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Buttons and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <a
              href="tel:+918160333243"
              className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 text-lg font-semibold"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/918160333243"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 text-lg font-semibold"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-green-600 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg"
        >
          <div className="px-4 pt-4 pb-4 space-y-4 flex flex-col items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 text-gray-700 hover:text-green-600 text-lg font-semibold bg-gradient-to-r from-white to-green-50 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-center w-full max-w-xs"
              >
                {item.name}
              </a>
            ))}

            <a
              href="tel:+918160333243"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 text-lg font-semibold w-full max-w-xs"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/918160333243"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300 text-lg font-semibold w-full max-w-xs"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
