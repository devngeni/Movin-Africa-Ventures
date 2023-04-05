import React from "react";
import Hero from "./HeroSection/Hero";
import Navbar from "./Navbar/Navbar";
import WeAre from "./WeAre/WeAre";
import ValueAdd from "./ValueAdd/ValueAdd";
import WhyNow from "./WhyNow/WhyNow";

const Landing = () => {
  return (
    <div className="all_components">
      <Navbar />
      <Hero />
      <WeAre />
      <ValueAdd />
      <WhyNow />
    </div>
  );
};

export default Landing;
