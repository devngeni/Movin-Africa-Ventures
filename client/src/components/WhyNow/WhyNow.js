import React from "react";
import "./WhyNow.css";

const WhyNow = () => {
  return (
    <div className="whyNow">
      <div>Why Now</div>
      <div className="withThe_">
        With the rapid pace of technological advancements and the growing demand
        for digital solutions, there is a tremendous opportunity for African
        businesses to leverage technology to scale and compete on a global
        level.
      </div>
      <img
        src={require("../../assets/images/bulb.png")}
        alt=""
        className="why_icon"
      />
      <div className="movin_africa_is_here">
        Movin.Africa is here to provide the necessary capital, expertise, and
        support to help these businesses thrive in the digital age.
      </div>
    </div>
  );
};

export default WhyNow;
