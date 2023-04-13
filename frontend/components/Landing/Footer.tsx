import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import Movin from "../../public/FooterLogo.svg";
import SendIcon from "../../public/SendIcon.png";
import MenuIcon from "../../public/QuickLinks.png";

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

  return (
    <div className={`${footer} ${expanded ? expand : collapse}`}>
      <div className={footer_logo}>
        <Image src={Movin} alt="movin-afica-icon" />
      </div>
      <div className={links_socials_container}>
        <div className={links_socials_container_grids}>
          <div className={Boldtext_footer}>Quick Links</div>
          <span>Back to Top</span>
          <span>About Us</span>
          <span>Investment Criteria </span>
          <span>Portfolio</span>
          <span>Resources</span>
        </div>
        <div className={links_socials_container_grids}>
          <div className={Boldtext_footer}>Social Media</div>
          <span>Twitter</span>
          <span>Linked In</span>
          <span>LinkTree </span>
          <span>Substack</span>
          <span className={aboveFaqsLine} />
          <span>FAQs</span>
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
            <span>Back to Top</span>
            <span>About Us</span>
            <span>Investment Criteria </span>
            <span>Portfolio</span>
            <span>Resources</span>
          </div>
          <div className={links_socials_container_grids}>
            <div className={Boldtext_footer}>Social Media</div>
            <span>Twitter</span>
            <span>Linked In</span>
            <span>LinkTree </span>
            <span>Substack</span>
            <span className={aboveFaqsLine} />
            <span>FAQs</span>
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
      <div className={copyright}>Copyright @2023 All Rights Reserved.</div>
    </div>
  );
}
