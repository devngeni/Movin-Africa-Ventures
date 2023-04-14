import React, { useState } from "react";
import Moving from "../../public/Moving.png";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import mLogo from "../../public/mobileImages/lgo.svg";
import MenuIcon from "../../public/mobileImages/MenuIcon.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const {
    nav,
    logo,
    mini_nav,
    Menu_icon,
    mobile_Logo,
    mobilenav,
    theMiniNav,
    x_close,
    open,
    close,
  } = styles;

  const handleHomeRoute = () => {
    const section = document.getElementById("Home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveNav("Home");
  };
  const handleAboutUsRoute = () => {
    const section = document.getElementById("AboutUs");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveNav("AboutUs");
  };
  const handleInvestmentCriteriaRoute = () => {
    const section = document.getElementById("InvestmentCriteria");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveNav("InvestmentCriteria");
  };
  return (
    <div>
      <div className={nav}>
        <Image className={logo} src={Moving} alt="movin-icon" />
        <Image className={mobile_Logo} src={mLogo} alt="movin-icon" />
        <div
          className={Menu_icon}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Image src={MenuIcon} alt="menu-icon" />
        </div>
        <div className={mini_nav}>
          <span
            onClick={handleHomeRoute}
            className={activeNav === "Home" ? styles.active : ""}
          >
            Home
          </span>
          <span
            onClick={handleAboutUsRoute}
            className={activeNav === "AboutUs" ? styles.active : ""}
          >
            About Us
          </span>
          <span
            onClick={handleInvestmentCriteriaRoute}
            className={activeNav === "InvestmentCriteria" ? styles.active : ""}
          >
            Investment Criteria
          </span>
          <span>Portfolio</span>
          <span>Resources</span>
        </div>
      </div>
      <div className={`${mobilenav} ${isOpen ? open : close}`}>
        <div className={theMiniNav}>
          <button
            className={x_close}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            X
          </button>
          <div
            onClick={() => {
              handleHomeRoute();
              setIsOpen(!isOpen);
            }}
            className={activeNav === "Home" ? styles.active : ""}
          >
            Home
          </div>
          <div
            onClick={() => {
              handleAboutUsRoute();
              setIsOpen(!isOpen);
            }}
            className={activeNav === "AboutUs" ? styles.active : ""}
          >
            About Us
          </div>
          <div
            onClick={() => {
              handleInvestmentCriteriaRoute();
              setIsOpen(!isOpen);
            }}
            className={activeNav === "InvestmentCriteria" ? styles.active : ""}
          >
            Investment Criteria
          </div>
          <div>Portfolio</div>
          <div>Resources</div>
        </div>
      </div>
    </div>
  );
}
