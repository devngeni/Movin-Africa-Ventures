import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import Movin from "../public/FooterLogo.svg";
import SendIcon from "../public/SendIcon.png";
import MenuIcon from "../public/QuickLinks.png";
import Link from "next/link";
// import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
export default function Footer() {
  const [expanded, setExpanded] = useState(false);

  const {
    footer,
    footer_logo,
    links_socials_container,
    links_socials_container_grids,
    Boldtext_footer,
    aboveFaqsLine,
    subscribe_grid,
    subscribe_container,
    send_button,
    send_icon,
    getLatestNews,
    footer_line,
    copyright,
    subscribe_grid_mobile,
    openQuickLinks_component,
    openQuickLinks,
    links_socials_container_mobile,
    collapse,
    expand,
    QuickLinks_button,
    quickLinksText,
    icon_btn,
    x_close,
    open,
    close,
  } = styles;

  const toggleLinks = () => {
    setExpanded(!expanded);
  };
  const [activeNav] = useState("Home");

  return (
    <div className={`${footer} ${expanded ? expand : collapse}`}>
      <Fade direction="up">
        <div className={footer_logo}>
          <Image src={Movin} alt="movin-afica-icon" />
        </div>
      </Fade>
      <div className={links_socials_container}>
        <div className={links_socials_container_grids}>
          <div className={Boldtext_footer}>Quick Links</div>
          <Fade direction="up">
            <Link href="/" className={activeNav === "/" ? styles.active : ""}>
              Back to Top
            </Link>
          </Fade>
          <Fade direction="up">
            <Link
              href="/#AboutUs"
              className={activeNav === "/" ? styles.active : ""}
            >
              About Us
            </Link>
          </Fade>
          <Fade direction="up">
            <Link
              href="/#InvestmentCriteria"
              className={activeNav === "/" ? styles.active : ""}
            >
              Investment Criteria
            </Link>
          </Fade>
          <Fade direction="up">
            <Link href={"/Portfolio"}>Portfolio</Link>
          </Fade>
          <Fade direction="up">
            <Link href={"/Resources"}>Resources</Link>
          </Fade>
        </div>
        <div className={links_socials_container_grids}>
          <div className={Boldtext_footer}>
            <Fade direction="up">Social Media</Fade>
          </div>
          <Fade direction="up">
            <Link href={"/#Twitter"}>Twitter</Link>
          </Fade>
          <Fade direction="up">
            <Link href={"/#LinkedIn"}>Linked In</Link>
          </Fade>
          <Fade direction="up">
            <Link href={"/#LinkTree"}>LinkTree </Link>
          </Fade>
          <Fade direction="up">
            <Link href={"/#Substack"}>Substack</Link>
          </Fade>
          <Link href={"#null"}>
            <div className={aboveFaqsLine} />
          </Link>
          <Fade direction="up">
            <Link href={"/#FAQs"}>FAQs</Link>
          </Fade>
        </div>
        <div className={subscribe_grid}>
          <div className={subscribe_container}>
            <input placeholder="subscribe" />
            <div className={send_button}>
              <div className={send_icon}>
                <Image src={SendIcon} alt="send-icon" />
              </div>
            </div>
          </div>
          <div className={getLatestNews}>
            Get latest news and resources direct in your inbox!
          </div>
        </div>
      </div>
      <div
        className={`${openQuickLinks} ${expanded ? close : open}`}
        onClick={toggleLinks}
      >
        <div
          className={quickLinksText}
          style={{ textDecorationLine: "underline", left: "80px" }}
        >
          Quick Links
        </div>
        <div className={icon_btn}>
          <Image src={MenuIcon} alt="MenuIcon" />
        </div>
      </div>
      <div className={`${openQuickLinks_component} ${expanded ? open : close}`}>
        <div className={QuickLinks_button}>
          <div className={quickLinksText}>Quick Links</div>
          <button className={x_close} onClick={toggleLinks}>
            X
          </button>
        </div>
        <div className={links_socials_container_mobile}>
          <div className={links_socials_container_grids}>
            <div className={Boldtext_footer}>Quick Links</div>

            <Link href="/" className={activeNav === "/" ? styles.active : ""}>
              Back to Top
            </Link>
            <Link
              href={"/#AboutUs"}
              className={activeNav === "AboutUs" ? styles.active : ""}
            >
              About Us
            </Link>
            <Link
              href={"/#InvestmentCriteria"}
              className={
                activeNav === "InvestmentCriteria" ? styles.active : ""
              }
            >
              Investment Criteria
            </Link>
            <Link href={"/Portfolio"}>Portfolio</Link>
            <Link href={"/Resources"}>Resources</Link>
          </div>
          <div className={links_socials_container_grids}>
            <div className={Boldtext_footer}>Social Media</div>
            <Link href={"/#"}>Twitter</Link>
            <Link href={"/#"}>Linked In</Link>
            <Link href={"/#"}>LinkTree </Link>
            <Link href={"/#"}>Substack</Link>
            <Link href={"/#"}>
              <div className={aboveFaqsLine} />
            </Link>
            <Link href={"/#FAQs"}>FAQs</Link>
          </div>
          <div className={subscribe_grid}>
            <div className={subscribe_container}>
              <input placeholder="subscribe" />
              <div className={send_button}>
                <div className={send_icon}>
                  <Image src={SendIcon} alt="send-icon" />
                </div>
              </div>
            </div>
            <div className={getLatestNews}>
              Get latest news and resources direct in your inbox!
            </div>
          </div>
        </div>
      </div>
      <div className={subscribe_grid_mobile}>
        <div className={subscribe_container}>
          <input placeholder="subscribe" />
          <div className={send_button}>
            <div className={send_icon}>
              <Image src={SendIcon} alt="send-icon" />
            </div>
          </div>
        </div>
        <div className={getLatestNews}>
          Get latest news and resources direct in your inbox!
        </div>
      </div>
      <div className={footer_line} />

      <div className={copyright}>
        {" "}
        <Fade direction="up">Copyright @2023 All Rights Reserved. </Fade>
      </div>
    </div>
  );
}
