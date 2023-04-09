import React from "react";
import Moving from "../../public/Moving.png";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";

export default function Navbar() {
  const { nav, logo, mini_nav, Menu_icon } = styles;
  return (
    <div className={nav}>
      <Image className={logo} src={Moving} alt="moving -icon" />
      <div className={Menu_icon}>
        <FiMenu />
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
