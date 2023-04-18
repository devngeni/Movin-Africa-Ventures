import React, { useState } from "react";
import Moving from "../../public/Moving.png";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import mLogo from "../../public/mobileImages/lgo.svg";
import MenuIcon from "../../public/mobileImages/MenuIcon.svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("/");
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

  React.useEffect(() => {
    setActiveNav(router.asPath);
  }, [router.asPath]);

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
          <Link href="/" className={activeNav === "/" ? styles.active : ""}>
            Home
          </Link>
          <Link
            href={"/#AboutUs"}
            className={activeNav === "/#AboutUs" ? styles.active : ""}
          >
            AboutUs
          </Link>
          <Link
            href={"/#InvestmentCriteria"}
            className={
              activeNav === "/#InvestmentCriteria" ? styles.active : ""
            }
          >
            InvestmentCriteria
          </Link>
          <Link href="/Portfolio">Portfolio</Link>
          <Link
            href="/Resources"
            className={activeNav === "/Resources" ? styles.active : ""}
          >
            Resources
          </Link>
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
          <Link href={"/#Home"}>
            <div
              onClick={() => {
                setIsOpen(!isOpen);
                setActiveNav("Home");
              }}
              className={activeNav === "/" ? styles.active : ""}
            >
              Home
            </div>
          </Link>

          <Link href="/#AboutUs">
            <div
              onClick={() => {
                setIsOpen(!isOpen);
                setActiveNav("AboutUs");
              }}
              className={activeNav === "AboutUs" ? styles.active : ""}
            >
              About Us
            </div>
          </Link>
          <Link href={"/#InvestmentCriteria"}>
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={
                activeNav === "InvestmentCriteria" ? styles.active : ""
              }
            >
              Investment Criteria
            </div>
          </Link>
          <Link href={"/Portfolio"}>
            <div>Portfolio</div>
          </Link>
          <Link href="/Resources">
            <div className={activeNav === "Resources" ? styles.active : ""}>
              Resources
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
