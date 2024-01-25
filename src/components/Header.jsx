import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.01 }}
      className="flex justify-between items-center p-5 bg-slate-200"
    >
      <div className="flex logo text-xl">
        {/* Brand Logo or Name */}
        <img className="size-12" src="public/thomas-logo.svg" />
        <p className="font-sans self-center pl-2">Your Product</p>
      </div>
      <nav className="hidden md:block">
        {/* Desktop Navigation Links */}
        <a href="https://wa.me/5547996235145">
          <i className="btn bg-green-600 w-12 h-12">
            <FaWhatsapp />
          </i>
        </a>
        <a href="https://www.instagram.com/thomasalemao.wav/">
          <i className="btn bg-pink-500 w-12 h-12">
            <FaInstagram />
          </i>
        </a>
      </nav>
      <div className="md:hidden">
        {/* Mobile Menu Icon */}
        <a href="https://wa.me/5547996235145">
          <i className="btn bg-green-600 w-12 h-12">
            <FaWhatsapp />
          </i>
        </a>
        <a href="https://www.instagram.com/thomasalemao.wav/">
          <i className="btn bg-pink-500 w-12 h-12">
            <FaInstagram />
          </i>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
