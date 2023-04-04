import React from "react";
import "./ValueAdd.css";

const ValueAdd = () => {
  return (
    <div className="valuePage">
      <div className="valueAdd_container">
        <div>ValueAdd</div>
        <div className="grid1">
          <img
            src={require("../../assets/valueAdd_images/grid1img.png")}
            alt=""
          />
          <div className="headers">Financial Support</div>
          <p className="descrip">
            Our main fund is well-equipped to provide robust and consistent
            financial support to tech companies looking to scale their
            operations. We possess the necessary resources to make a significant
            impact on a company’s growth trajectory.
          </p>
        </div>
        <div className="grid2">
          <img
            src={require("../../assets/valueAdd_images/grid2Img.png")}
            alt=""
          />
          <div className="headers">Engineering Services</div>
          <p className="descrip">
            Our extensive engineering expertise gained from our existing
            ventures, like NGENI LABs, puts us in good stead to provide
            comprehensive engineering capacity to a diverse range of projects
            and businesses.
          </p>
        </div>
        <div className="grid3">
          <img
            src={require("../../assets/valueAdd_images/grid3Img.png")}
            alt=""
          />
          <div className="headers" id="grid3_H">
            Tech-Knowledge Sharing
          </div>
          <p className="descrip" id="grid3_D">
            We are a world-class team of tech experts who can guide and support
            tech businesses to build their operations, scale up, and achieve
            growth.
          </p>
        </div>
        <div className="grid4">
          <img
            src={require("../../assets/valueAdd_images/grid4Img.png")}
            alt=""
          />
          <div className="headers">Traction</div>
          <p className="descrip">
            OpenTech Fund is breaking new ground as the first fund in Africa to
            invest in tech-focused businesses across three continents. With a
            team of seasoned professionals in investment, entrepreneurship, and
            community building, the fund is poised to make waves in the
            financial and tech industries.
          </p>
        </div>
        <div className="plusLines_div">
          <svg
            className="plusLines"
            viewBox="0 0 1295 517"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="648"
              y1="0.327881"
              x2="648"
              y2="516.615"
              stroke="url(#paint0_linear_9_1004)"
            />
            <line
              x1="1294.62"
              y1="258.971"
              x2="0.378113"
              y2="258.971"
              stroke="url(#paint1_linear_9_1004)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_9_1004"
                x1="716.085"
                y1="469.994"
                x2="717.392"
                y2="24.4991"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFFBFB" stopOpacity="0" />
                <stop offset="0.5" stopColor="#CDCC79" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_9_1004"
                x1="117.25"
                y1="327.056"
                x2="1233.98"
                y2="335.268"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFFBFB" stopOpacity="0" />
                <stop offset="0.5" stopColor="#CDCC79" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ValueAdd;
