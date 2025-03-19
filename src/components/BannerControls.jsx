import React from "react";

export default function BannerControls({ setText, setBg, setImage }) {
  return (
    <div className="mt-4 space-y-2 flex flex-col items-center">
      {/* Text Input */}
      <input
        type="text"
        placeholder="Change banner text"
        className="p-2 border rounded w-full"
        onChange={(e) => setText(e.target.value)}
      />

      {/* Color Picker */}
      <input
        type="color"
        className="w-12 h-12 cursor-pointer"
        onChange={(e) => setBg(e.target.value)}
      /> {}

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        className="p-2 border rounded"
        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
      />
    </div>
  );
}
