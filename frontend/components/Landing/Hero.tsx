import React from "react";
import Ellipse1 from "../../public/Ellipse1.png";
import PhoneImg from "../../public/PhoneImg.png";
import Image from "next/image";
import styles from "@/styles/Hero.module.css";
export default function Hero() {
  const { home_page, home_img, phoneImg, home_container,Linking, fueling_, home_button } =
    styles;
  return (
    <div className={home_page} id="Home">
      <div className={home_container}>
      <Image src={Ellipse1} alt="ecllipse-img" className={home_img} />
      <Image className={phoneImg} src={PhoneImg} alt="phone-icon" />
      <div className={Linking}>Linking Technology with Capital</div>
      <div className={fueling_}>
        Fueling the Growth of Afrika’s Tech Ecosystem While Creating
        Opportunities For Young, Vibrant Minds.
      </div>
      <button className={home_button}>Button</button></div>
    </div>
  );
}
