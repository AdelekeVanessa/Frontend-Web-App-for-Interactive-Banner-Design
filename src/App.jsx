import React, { useState } from "react";
import Banner from "./components/Banner";
import BannerControls from "./components/BannerControls";

export default function App() {
  const [bannerText, setBannerText] = useState("Welcome to My Awesome Banner");
  const [bannerBg, setBannerBg] = useState("#3B82F6"); // Default Tailwind blue color
  const [bannerImage, setBannerImage] = useState("/images/default.jpg"); // Ensure this exists in 'public/images/'

  return (
    <div className="flex flex-col items-center p-4">
      <Banner text={bannerText} bg={bannerBg} image={bannerImage} />
      <BannerControls setText={setBannerText} setBg={setBannerBg} setImage={setBannerImage} />
    </div>
  );
}
