
import { motion } from "framer-motion";
import { Award, Heart, Users, Leaf } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Customers" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Heart, number: "100%", label: "Natural Ingredients" },
    { icon: Leaf, number: "0", label: "Harmful Chemicals" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-gray-900"
              >
                Meet Dr. <span className="text-green-600">Drashti Thakar</span>
                <br />
                <span className="text-2xl lg:text-3xl text-gray-700 font-medium">
                  Your Trusted Hair Care Expert
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                As a certified homeopathic doctor with over 5 years of experience, 
                I've dedicated my practice to promoting holistic hair wellness. 
                After witnessing the transformative power of natural remedies, 
                I founded HOMAVEDA to bring you the finest herbal hair care solutions.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Every product is handcrafted with love, using time-tested ingredients 
                like Arnica, Jaborandi, Amla, Brahmi, and Bhringraj. Our mission is 
                to help you achieve naturally strong, shiny, and healthy hair without 
                any harmful chemicals.
              </motion.p>
            </div> */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                Meet <span className="text-green-600">Dr. Drashti Thakar</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-700 font-medium"
              >
                Your Trusted Hair Care Expert
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
              >
                As a certified homeopathic doctor with over 5 years of experience,
                I've dedicated my practice to promoting holistic hair wellness.
                After witnessing the transformative power of natural remedies,
                I founded HOMAVEDA to bring you the finest herbal hair care solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
              >
                Every product is handcrafted with love, using time-tested ingredients
                like Arnica, Jaborandi, Amla, Brahmi, and Bhringraj. Our mission is
                to help you achieve naturally strong, shiny, and healthy hair without
                any harmful chemicals.
              </motion.p>
            </div>



            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications & Trust</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Certified Doctor</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="text-blue-600" size={24} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Cruelty Free</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Leaf className="text-purple-600" size={24} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">100% Natural</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="text-amber-600" size={24} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Trusted Brand</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Doctor Image Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-6xl">👨‍⚕️</span>
                  </div>
                  <p className="text-green-800 font-semibold text-lg">Dr.Drashti Thakar</p>
                  <p className="text-green-600">Homeopathic Specialist</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className="text-green-600 mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
