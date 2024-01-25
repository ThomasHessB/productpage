import React, { useState } from "react";
import { motion } from "framer-motion";

const MainSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <motion.section
      className="bg-slate-50 text-center p-10"
      initial={{ scale: 0.7 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src="https://i.imgur.com/RxalQmM.jpg?1"
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.0 }}
        whileHover={{ scale: 1.07 }}
        alt="Product Image"
        className="mx-auto"
        onLoad={handleImageLoaded}
      />

      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.08 }}
        className="text-3xl md:text-5xl font-bold mt-5"
      >
        Monkey Leash
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.08 }}
        className="text-gray-600 text-sm md:text-base mt-3"
      >
        The best leash to control your personal monkey.
      </motion.p>
    </motion.section>
  );
};

export default MainSection;
