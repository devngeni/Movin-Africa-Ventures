import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home_page" id="Home">
      <img
        src={require("../../assets/images/Ellipse1.png")}
        alt=""
        className="home_img"
      />
      <img
        className="phoneImg"
        src={require("../../assets/images/phoneImg.png")}
        alt=""
      />
      <div className="Linking">Linking Technology with Capital</div>
      <div className="fueling_">
        Fueling the Growth of Afrika’s Tech Ecosystem While Creating
        Opportunities For Young, Vibrant Minds.
      </div>
      <button className="home_button">Button</button>
    </div>
  );
};

export default Home;
