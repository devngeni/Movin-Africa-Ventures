import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";

const Landing = () => {
  return (
    <div className="all_components">
      <Home />
      <AboutUs />
      <Navbar />
    </div>
  );
};

export default Landing;
