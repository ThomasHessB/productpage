import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ imageSrc, title, description }) => {
  const cardVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="bg-slate-50 p-4 rounded-lg shadow-md"
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.img
        src={imageSrc}
        className="w-full"
        alt={title}
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.0 }}
      />
      <motion.h3 className="text-lg font-semibold mt-2">{title}</motion.h3>
      <motion.p className="text-sm text-gray-600">{description}</motion.p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      imageSrc: "https://i.imgur.com/HLGQXLx.png",
      title: "Feature 1",
      description: "Description of Feature 1",
    },
    {
      imageSrc: "https://i.imgur.com/2OSiNQN.png",
      title: "Feature 1",
      description: "Description of Feature 1",
    },
    {
      imageSrc: "https://i.imgur.com/HTpyKqT.jpg",
      title: "Feature 1",
      description: "Description of Feature 1",
    },
    // ... more features
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          imageSrc={feature.imageSrc}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
