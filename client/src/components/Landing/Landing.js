import React from "react";
import Hero from "./HeroSection/Hero";
import Navbar from "./Navbar/Navbar";
import WeAre from "./WeAre/WeAre";
import ValueAdd from "./ValueAdd/ValueAdd";
import WhyNow from "./WhyNow/WhyNow";
import Investment from "./Investments/Investment";
import Teams from "./Teams/Teams";

const Landing = () => {
  return (
    <div className="all_components">
      <Navbar />
      <Hero />
      <WeAre />
      <ValueAdd />
      <WhyNow />
      <Investment />
      <Teams />
    </div>
  );
};

export default Landing;
