import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import BannerControls from "./BannerControls";

const InteractiveBanner = () => {
  const [text, setText] = useState("Explore the Future of Interactive Banners");
  const [bgColor, setBgColor] = useState("#1e3a8a");
  const [fontSize, setFontSize] = useState(24);
  const [image, setImage] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      {/* Banner Display */}
      <Banner text={text} bgColor={bgColor} fontSize={fontSize} image={image} scrollY={scrollY} />
      
      {/* Controls Panel */}
      <BannerControls setText={setText} setBgColor={setBgColor} setFontSize={setFontSize} setImage={setImage} />
    </div>
  );
};

export default InteractiveBanner;