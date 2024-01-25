import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="footer footer-center p-10 bg-slate-200 text-black"
      whileTap={{ scale: 0.95 }}
    >
      <aside>
        <motion.img
          className="size-16"
          src="https://i.imgur.com/ss4ba1B.png"
          whileHover={{ scale: 1.23, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        />
        <p className="font-bold">
          Thomas Hess Bernhardt <br />
          Web Developer since 2023
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
    </motion.footer>
  );
};

export default Footer;
