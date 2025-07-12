
import { motion } from "framer-motion";
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Heart,
  Shield,
  Truck,
  CreditCard
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Ingredients", href: "#ingredients" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  const policies = [
    { name: "Shipping Policy", href: "#shipping" },
    { name: "Return & Refund", href: "#refund" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "FAQ", href: "#faq" }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://instagram.com/homaveda",
      color: "hover:text-pink-500" 
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      href: "https://facebook.com/homaveda",
      color: "hover:text-blue-500" 
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      href: "https://twitter.com/homaveda",
      color: "hover:text-blue-400" 
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      href: "https://youtube.com/homaveda",
      color: "hover:text-red-500" 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <Leaf className="text-green-400" size={32} />
              <span className="text-2xl font-bold">HOMAVEDA</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in natural hair care. We blend ancient homeopathic wisdom 
              with modern science to bring you the finest herbal hair care products.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400" size={16} />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-green-400" size={16} />
                <span className="text-gray-300">hello@homaveda.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-green-400 mt-1" size={16} />
                <span className="text-gray-300">
                  123 Wellness Street,<br />
                  Green Valley, Mumbai - 400001
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Customer Care</h3>
            <ul className="space-y-3">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a 
                    href={policy.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold">Stay Connected</h3>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Subscribe to get hair care tips and exclusive offers
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 text-white text-sm"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-200">
                  <Mail size={16} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Truck className="text-green-400" size={24} />
              <div>
                <p className="text-white font-medium text-sm">Free Shipping</p>
                <p className="text-gray-400 text-xs">Orders above ₹999</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Shield className="text-blue-400" size={24} />
              <div>
                <p className="text-white font-medium text-sm">Money Back</p>
                <p className="text-gray-400 text-xs">30-day guarantee</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Heart className="text-red-400" size={24} />
              <div>
                <p className="text-white font-medium text-sm">Made with Love</p>
                <p className="text-gray-400 text-xs">Handcrafted products</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <CreditCard className="text-purple-400" size={24} />
              <div>
                <p className="text-white font-medium text-sm">Secure Payment</p>
                <p className="text-gray-400 text-xs">100% safe & secure</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 HOMAVEDA. All rights reserved. | Made with 
                <Heart className="inline mx-1 text-red-400" size={16} />
                by Dr. Wellness
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">We accept:</span>
              <div className="flex space-x-2">
                <div className="bg-gray-800 px-3 py-1 rounded text-gray-300 text-xs">Razorpay</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-gray-300 text-xs">UPI</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-gray-300 text-xs">Cards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
