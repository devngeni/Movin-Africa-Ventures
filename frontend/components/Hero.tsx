import { Fade } from "react-awesome-reveal";
import Ellipse1 from "../public/Ellipse1.png";
import MobileEllipse1 from "../public/mobileImages/HeroEllipse1.png";
import PhoneImg from "../public/PhoneImg.png";
import Image from "next/image";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  const {
    home_page,
    home_img,
    phoneImg,
    home_container,
    Linking,
    fueling_,
    home_button,
    mobile_home_img,
    aboutLink,
  } = styles;
  return (
    <div className={home_page} id="Home">
      <div className={home_container}>
        <Image src={Ellipse1} alt="ecllipse-img" className={home_img} />
        <Image
          src={MobileEllipse1}
          alt="ecllipse-img"
          className={mobile_home_img}
        />
       <div>
          <Fade direction="up">
            <div>
              <Image className={phoneImg} src={PhoneImg} alt="phone-icon" />
            </div>
          </Fade>
        </div>
        <div className={Linking}>Linking Technology with Capital</div>
        <div className={fueling_}>
          Fueling the Growth of Africa&#39;s Tech Ecosystem While Creating
          Opportunities For Young, Vibrant Minds.
        </div>
        <button className={home_button}>Button</button>
        <div className={aboutLink} id="AboutUs"></div>
      </div>
    </div>
  );
}
