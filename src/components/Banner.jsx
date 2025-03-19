import React from "react";
import { motion } from "framer-motion";

export default function Banner({ text, bgColor, fontSize, image, scrollY }) {
    return (
      <motion.div
        className="w-full h-60 flex items-center justify-center text-white font-bold shadow-lg rounded-lg relative overflow-hidden"
        style={{
          backgroundColor: bgColor,
          fontSize: `${fontSize}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Image */}
        {image && (
          <motion.img
            src={image}
            alt="Banner Background"
            className="absolute w-full h-full object-cover rounded-lg opacity-50"
            animate={{ scale: 1 + scrollY * 0.001 }}
          />
        )}
  
        {/* Text Content */}
        <motion.span
          className="relative z-10 px-4"
          animate={{ y: scrollY * 0.2 }}
        >
          {text}
        </motion.span>
      </motion.div>
    );
  }