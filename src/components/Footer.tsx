
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Leaf, Heart, Shield, Star, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Leaf className="text-green-500" size={32} />
              <h3 className="text-2xl font-bold text-green-400">HOMAVEDA</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Discover the power of homeopathy with our handcrafted hair care products. 
              Made with love, backed by science, trusted by nature.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Star className="text-yellow-400" size={16} />
                <span className="text-gray-300">Doctor Backed</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="text-blue-400" size={16} />
                <span className="text-gray-300">100% Natural</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {/* <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
            </ul> */}
          </motion.div>

          {/* Customer Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Customer Care</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400" size={18} />
                <div>
                  <p className="text-sm text-gray-400">Call Support</p>
                  <a href="tel:+918160333243" className="text-white hover:text-green-400 transition-colors">
                    +91 8160333243
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-green-400" size={18} />
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a 
                    href="https://wa.me/918160333243" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    Quick Support
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-green-400" size={18} />
                <div>
                  <p className="text-sm text-gray-400">Doctor Email</p>
                  <a href="mailto:doctor@homaveda.com" className="text-white hover:text-green-400 transition-colors">
                    doctor@homaveda.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-green-400 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">Homeopathic Clinic</p>
                  <p className="text-gray-400 text-sm">Natural Hair Care Center</p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-300 mb-2">Business Hours:</p>
                <p className="text-xs text-gray-400">Mon-Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-xs text-gray-400">Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <Heart className="text-red-400" size={16} />
              <span>Made with Love</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-blue-400" size={16} />
              <span>Chemical Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-400" size={16} />
              <span>Doctor Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="text-green-400" size={16} />
              <span>100% Natural</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 HOMAVEDA. All rights reserved. | Crafted with natural ingredients for healthy hair.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
