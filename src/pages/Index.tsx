
import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
