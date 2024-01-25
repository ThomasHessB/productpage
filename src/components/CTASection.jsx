import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const CTASection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const bgAnimation = {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <div className="relative h-screen text-center p-10 bg-gray-100 flex justify-center items-center mb-5">
      {/* Animated Background */}
      <motion.img
        src="https://i.imgur.com/cOW1tEA.jpg"
        initial={bgAnimation.initial}
        animate={bgAnimation.animate}
        transition={bgAnimation.transition}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Background"
        onLoad={handleImageLoaded}
      />

      {/* Content Container */}
      <div className="text-center relative z-10">
        <motion.h2
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to Make a Change?
        </motion.h2>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-md md:text-lg mt-2"
        >
          Join us now and transform your experience!
        </motion.p>
        <nav className="hidden md:block">
          {/* Desktop Navigation Links */}
          <a href="https://wa.me/5547996235145">
            <motion.i
              className="btn bg-green-600 w-12 h-12"
              whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileTap={{ scale: 1.05 }}
            >
              <FaWhatsapp />
            </motion.i>
          </a>
          <a href="https://www.instagram.com/thomasalemao.wav/">
            <motion.i
              className="btn bg-pink-500 w-12 h-12"
              whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileTap={{ scale: 1.05 }}
            >
              <FaInstagram />
            </motion.i>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default CTASection;
