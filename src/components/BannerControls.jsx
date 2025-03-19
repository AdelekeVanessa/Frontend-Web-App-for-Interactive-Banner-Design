import React from "react";
import { motion } from "framer-motion";
import { SketchPicker } from "react-color";

export default function BannerControls({ setText, setBgColor, setFontSize, setImage }) {
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => setImage(e.target.result);
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className="mt-6 bg-white p-4 shadow-md rounded-lg w-full max-w-md">
        <label className="block mb-2 font-medium">Banner Text:</label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Enter banner text"
          onChange={(e) => setText(e.target.value)}
        />
  
        <label className="block mt-4 mb-2 font-medium">Background Color:</label>
        <SketchPicker onChangeComplete={(color) => setBgColor(color.hex)} />
  
        <label className="block mt-4 mb-2 font-medium">Font Size:</label>
        <input type="range" min="12" max="48" className="w-full" onChange={(e) => setFontSize(parseInt(e.target.value))} />
  
        <label className="block mt-4 mb-2 font-medium">Upload Background Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
    );
  }