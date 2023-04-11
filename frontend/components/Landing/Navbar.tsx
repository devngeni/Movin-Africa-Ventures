import React from "react";
import Moving from "../../public/Moving.png";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import mLogo from "../../public/mobileImages/lgo.svg";
import MenuIcon from "../../public/mobileImages/MenuIcon.svg";

export default function Navbar() {
  const { nav, logo, mini_nav, Menu_icon, mobile_Logo } = styles;
  return (
    <div className={nav}>
      <Image className={logo} src={Moving} alt="movin-icon" />
      <Image className={mobile_Logo} src={mLogo} alt="movin-icon" />
      <div className={Menu_icon}>
        <Image src={MenuIcon} alt="menu-icon" />
      </div>
      <div className={mini_nav}>
        <span>Home</span>
        <span>About Us</span>
        <span>Investmet Criteria</span>
        <span>Portfolio</span>
        <span>Resources</span>
      </div>
    </div>
  );
}
