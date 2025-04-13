import React from "react";
import { motion } from "framer-motion";
import DraggableImage from "./DraggableImage";

export default function Banner({
  text,
  bgColor,
  fontSize,
  backgroundImage,
  activeImages,
  width,
  height,
  borderRadius,
  selectedFont,
  textStyle,
  textColor,
  onImageDrop,
  onImageDelete,
}) {
  const DEFAULT_TEXT = `I love creating at the intersection of code & creativity ✨
Fashion • Sports • Architecture • Automobiles
Music • Poetry • Film • Comics • Aesthetics`;

  const displayText = text || DEFAULT_TEXT;

  const handleDrop = (e) => {
    e.preventDefault();
    const imageIndex = e.dataTransfer.getData("imageIndex");
    onImageDrop && onImageDrop(imageIndex);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className="flex items-center justify-center text-white font-bold shadow-lg relative overflow-hidden mx-auto"
      style={{
        backgroundColor: bgColor,
        width: width === "full" ? "100%" : `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        margin: "20px 0",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Background Image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Banner Background"
          className="absolute w-full h-full object-cover opacity-50"
          style={{ borderRadius: `${borderRadius}px` }}
        />
      )}

      {/* Draggable Images */}
      {activeImages.map((img, index) => (
        <DraggableImage
          key={index}
          src={img}
          onDelete={() => onImageDelete(index)}
        />
      ))}

      {/* Text Content */}
      <span
        className="relative z-30 px-4 whitespace-pre-line"
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: selectedFont,
          fontWeight:
            textStyle === "bold"
              ? "bold"
              : textStyle === "lighter"
              ? "lighter"
              : "normal",
          fontStyle:
            textStyle === "italic"
              ? "italic"
              : textStyle === "oblique"
              ? "oblique"
              : "normal",
          textDecoration:
            textStyle === "underline"
              ? "underline"
              : textStyle === "strikethrough"
              ? "line-through"
              : "none",
          textTransform:
            textStyle === "uppercase"
              ? "uppercase"
              : textStyle === "lowercase"
              ? "lowercase"
              : textStyle === "capitalize"
              ? "capitalize"
              : "none",
          color: textColor,
        }}
      >
        {displayText}
      </span>
    </motion.div>
  );
}
