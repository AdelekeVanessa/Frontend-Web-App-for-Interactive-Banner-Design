import React from "react";

export default function Banner({ text, bg, image }) {
  return (
    <div
      className="w-full p-6 text-white text-center"
      style={{
        backgroundColor: bg, 
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold">{text}</h1>
    </div>
  );
}
