import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ avatar, testimonial, name }) => {
  return (
    <motion.div
      className="bg-slate-50 p-4 rounded-lg shadow-md"
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <motion.img
        src={avatar}
        className="w-16 h-16 rounded-full mx-auto"
        alt={name}
        whileHover={{ scale: 1.5 }}
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <p className="text-center text-sm mt-3">{testimonial}</p>
      <h5 className="text-center font-semibold mt-2">{name}</h5>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      avatar: "https://i.imgur.com/Mu27r4v.jpg",
      testimonial: "This product changed my life!",
      name: "Jane Doe",
    },
    // ... more testimonials
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          avatar={testimonial.avatar}
          testimonial={testimonial.testimonial}
          name={testimonial.name}
        />
      ))}
    </div>
  );
};

export default TestimonialsSection;
