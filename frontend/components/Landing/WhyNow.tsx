import React from "react";
import styles from "@/styles/WhyNow.module.css";
import Bulb from "../../public/bulb.png";
import Image from "next/image";
export default function WhyNow() {
  const { whyNow, withThe_, why_icon, movin_africa_is_here, Why_Container } =
    styles;
  return (
    <div className={whyNow}>
      <div>Why Now</div>
      <div className={withThe_}>
        With the rapid pace of technological advancements and the growing demand
        for digital solutions, there is a tremendous opportunity for African
        businesses to leverage technology to scale and compete on a global
        level.
      </div>
      <Image src={Bulb} alt="" className={why_icon} />
      <div className={movin_africa_is_here}>
        Movin.Africa is here to provide the necessary capital, expertise, and
        support to help these businesses thrive in the digital age.
      </div>
    </div>
  );
}
