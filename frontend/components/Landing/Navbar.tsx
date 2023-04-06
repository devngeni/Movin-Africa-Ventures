import React from "react";
import Moving from "../../public/Moving.png";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const { nav, logo, mini_nav } = styles;
  return (
    <div className={nav}>
      <Image className={logo} src={Moving} alt="moving -icon" />
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
