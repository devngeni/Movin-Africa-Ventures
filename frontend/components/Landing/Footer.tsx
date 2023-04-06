import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import Movin from "../../public/FooterLogo.svg";
import SendIcon from "../../public/SendIcon.png";

export default function Footer() {
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
  } = styles;
  return (
    <div className={footer}>
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
      <div className={footer_line} />
      <div className={copyright}>Copyright @2023 All Rights Reserved.</div>
    </div>
  );
}
