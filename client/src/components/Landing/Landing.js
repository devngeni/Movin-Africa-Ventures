import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import ValueAdd from "../ValueAdd/ValueAdd";

const Landing = () => {
  return (
    <div className="all_components">
      <Navbar />
      <Home />
      <AboutUs />
      <ValueAdd />
    </div>
  );
};

export default Landing;
