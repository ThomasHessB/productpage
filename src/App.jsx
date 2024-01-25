import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
