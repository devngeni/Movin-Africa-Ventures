import React from "react";
import "./ValueAdd.css";

const ValueAdd = () => {
  return (
    <div className="valueAdd_container">
      <div>ValueAdd</div>
      <div className="grid1">
        <img
          className="grid_imgs"
          src={require("../../assets/images/grid1img.png")}
          alt=""
        />
        <div className="headers">Financial Support</div>
        <p className="descrip">
          Our main fund is well-equipped to provide robust and consistent
          financial support to tech companies looking to scale their operations.
          We possess the necessary resources to make a significant impact on a
          company’s growth trajectory.
        </p>
      </div>
      <div className="grid2">
        <img
          className="grid_imgs"
          src={require("../../assets/")}
          alt=""
        />
        <div className="headers">Engineering Services</div>
        <p className="descrip">
          Our extensive engineering expertise gained from our existing ventures,
          like NGENI LABs, puts us in good stead to provide comprehensive
          engineering capacity to a diverse range of projects and businesses.
        </p>
      </div>
      <div className="grid3">
        <img
          className="grid_imgs"
          src={require("../../assets/images/grid1img.png")}
          alt=""
        />
        <div className="headers">Tech-Knowledge Sharing</div>
        <p className="descrip">
          We are a world-class team of tech experts who can guide and support
          tech businesses to build their operations, scale up, and achieve
          growth.
        </p>
      </div>
      <div className="grid4">
        <img
          className="grid_imgs"
          src={require("../../assets/images/grid1img.png")}
          alt=""
        />
        <div className="headers">Traction</div>
        <p className="descrip">
          OOpenTech Fund is breaking new ground as the first fund in Africa to
          invest in tech-focused businesses across three continents. With a team
          of seasoned professionals in investment, entrepreneurship, and
          community building, the fund is poised to make waves in the financial
          and tech industries.
        </p>
      </div>
      <div className="plusLines_div">
        <svg
          viewBox="0 0 1739 1026"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="871"
            y1="0.993408"
            x2="871"
            y2="1025.59"
            stroke="url(#paint0_linear_9_1004)"
            stroke-width="3"
          />
          <line
            x1="1738.82"
            y1="514.792"
            x2="0.180542"
            y2="514.792"
            stroke="url(#paint1_linear_9_1004)"
            stroke-width="3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_9_1004"
              x1="938.085"
              y1="933.07"
              x2="943.232"
              y2="48.9847"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFBFB" stop-opacity="0" />
              <stop offset="0.5" stop-color="#CDCC79" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_9_1004"
              x1="157.181"
              y1="581.877"
              x2="1657.29"
              y2="596.697"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFFBFB" stop-opacity="0" />
              <stop offset="0.5" stop-color="#CDCC79" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ValueAdd;
