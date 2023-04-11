import React from "react";
import styles from "@/styles/WeAre.module.css";
import CityImage from "../../public/City.svg";
import CityMobileImg from "../../public/mobileImages/Mobile_City.png";
import Image from "next/image";
import Dots from "../../public/Dots.svg";
import Vector2 from "../../public/Vector2.svg";
import Vector1 from "@/public/Vector1";
export default function WeAre() {
  const {
    WeAre_Page,
    we_are_,
    we_are_pan,
    city_img,
    invest_container,
    invest_invest,
    moveLeft,
    moveRight,
    theCapital,
    weAre_grid_containers,
    green_grid,
    white_grid,
    z_index_bottom_grid,
    grid,
    left_grid,
    city_div,
    vectorc2,
    vectorc1,
    half_oval,
    city_mobile_img,
  } = styles;
  return (
    <div className={WeAre_Page}>
      <div className={grid}>
        <div className={left_grid}>
          <div className={we_are_}>
            We are Afrika’s First Ventures Collective Linking Technology to
            Capital
          </div>
          <div className={we_are_pan}>
            We are a Pan-Afrikan focus team of entrepreneurs, Engineers,
            investors, dealmakers, engineers, and community builders looking to
            leverage the continent’s vast potential.
          </div>
        </div>
        <div className={city_div}>
          <Image src={CityImage} alt="city-image" className={city_img} />
        </div>
        <div className={city_mobile_img}>
          <Image src={CityMobileImg} alt="city-image" className={city_img} />
        </div>
      </div>
      <div className={invest_container}>
        <div className={invest_invest}>
          <div id={moveLeft}>Invest in you</div>
          <div id={moveRight}>Invest with us.</div>
        </div>
      </div>
      <div className={theCapital}>
        <div>
          <div className={vectorc1}>
            <Vector1 />
          </div>
          <div>
            <Image src={Vector2} alt="lines-graphics" className={vectorc2} />
          </div>
          <div>
            <Image src={Dots} alt="dots-graphics" className={half_oval} />
          </div>
        </div>
        <div className={weAre_grid_containers}>
          <div className={green_grid}>
            <p>
              Despite Afrika being widely cited as the next frontier for
              emerging technologies, tech businesses across the continent are
              being hampered by insufficient access to capital, impeding their
              ability to leverage lucrative opportunities even as advanced
              economies continue to thrive and innovate.
            </p>
          </div>
          <div className={white_grid}>
            <p>
              Technology is everywhere, and every business in Africa, small or
              large, should be at the forefront of this revolution. It takes
              capital to make this work.
            </p>
          </div>
          <div className={z_index_bottom_grid}>
            <p>Movin.Africa is the capital moving Africa forward.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
