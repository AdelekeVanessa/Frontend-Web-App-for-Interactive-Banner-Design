import React, { useState } from "react";
import InteractiveBanner from "./components/InteractiveBanner";
import Banner from "./components/Banner";
import BannerControls from "./components/BannerControls";

export default function App() {
  const [bannerText, setBannerText] = useState("Welcome to My Awesome Banner");
  const [bannerBg, setBannerBg] = useState("#3B82F6"); 
  const [bannerImage, setBannerImage] = useState("/images/default.jpg"); 

  return (
    <div className="flex flex-col items-center p-4">
      <Banner text={bannerText} bg={bannerBg} image={bannerImage} />
      <BannerControls setText={setBannerText} setBg={setBannerBg} setImage={setBannerImage} />
    </div>
  );
}
