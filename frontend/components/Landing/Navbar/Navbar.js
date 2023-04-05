import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img
        className="logo"
        src={require("../../../assets/images/movin.png")}
        alt=""
      />
      <div className="mini_nav">
        <div>Home</div>
        <div>About Us</div>
        <div>Investmet Criteria</div>
        <div>Portfolio</div>
        <div>Resources</div>
      </div>
    </nav>
  );
};

export default Navbar;
