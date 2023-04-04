import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import ValueAdd from "../ValueAdd/ValueAdd";
import WhyNow from "../WhyNow/WhyNow";

const Landing = () => {
  return (
    <div className="all_components">
      <Navbar />
      <Home />
      <AboutUs />
      <ValueAdd />
      <WhyNow />
    </div>
  );
};

export default Landing;
