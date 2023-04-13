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
        In today&#39;s fast-paced world of rapid technological advancements,
        African businesses have a unique opportunity to leverage cutting-edge
        technology to scale and compete globally.
      </div>
      <Image src={Bulb} alt="" className={why_icon} />
      <div className={movin_africa_is_here}>
        Movin Africa is here to provide the necessary capital, expertise, and
        support to help these businesses thrive in the digital age.
      </div>
    </div>
  );
}
