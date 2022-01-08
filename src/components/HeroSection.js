import React from "react";
import Herovideo from "../media/Herovideo.mp4"

const HeroSection = () => {
  return (
    <div className="hero-video">
      <video src={Herovideo} autoPlay muted loop/>
    </div>
  );
};

export default HeroSection;
