
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Leaf, Droplets, Star } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Natural Remedies for Hair Fall That Actually Work",
      excerpt: "Discover time-tested homeopathic solutions that can help reduce hair fall naturally without any side effects.",
      author: "Dr. Wellness",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Hair Care Tips",
      image: "hair-fall",
      icon: Leaf
    },
    {
      id: 2,
      title: "The Science Behind Homeopathic Hair Care",
      excerpt: "Learn how ancient homeopathic principles combined with modern understanding create effective hair care solutions.",
      author: "Dr. Wellness",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Science",
      image: "science",
      icon: Star
    },
    {
      id: 3,
      title: "DIY Hair Oil Massage: Benefits and Techniques",
      excerpt: "Master the art of hair oil massage with our step-by-step guide to maximize the benefits of your hair care routine.",
      author: "Dr. Wellness",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "DIY Tips",
      image: "massage",
      icon: Droplets
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Hair Care <span className="text-green-600">Wisdom</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, natural remedies, and practical tips to help you achieve the healthy, beautiful hair you deserve.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured Article
                  </span>
                  <span className="text-green-100">•</span>
                  <span className="text-green-100">New</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Complete Guide to Natural Hair Care in 2024
                </h3>
                <p className="text-xl text-green-100 leading-relaxed">
                  Everything you need to know about maintaining healthy hair naturally, including our top 10 homeopathic ingredients and their benefits.
                </p>
                <div className="flex items-center space-x-4 text-green-100">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>Dr. Wellness</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>December 12, 2024</span>
                  </div>
                </div>
                <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center space-x-2">
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <div className="hidden md:block">
                <div className="w-full h-64 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center space-y-2">
                    <Leaf size={48} className="text-white mx-auto" />
                    <p className="text-white font-semibold">Featured Guide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <post.icon size={48} className="text-green-600 mx-auto mb-2" />
                    <p className="text-green-700 font-medium">{post.category}</p>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span className="text-green-600 font-medium">{post.readTime}</span>
                  </div>

                  {/* Read More */}
                  <div className="flex items-center space-x-2 text-green-600 font-medium group-hover:text-green-700 transition-colors duration-200">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Hair Care Tips in Your Inbox
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive expert hair care advice, natural remedies, and exclusive tips from Dr. Wellness directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-200">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
