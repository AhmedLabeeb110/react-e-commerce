import React from "react";
import Herovideo1 from "../media/Herovideo1.mp4"
import { Button } from 'antd';

const HeroSection = () => {
  return (
    <div className="hero-video">
      <video src={Herovideo1} autoPlay muted loop />
      <Button type="primary" className="hero-buttom">See Options</Button>
    </div>
  );
};

export default HeroSection;
