import styles from "@/styles/Investments.module.css";
import Image from "next/image";

import competionArrow from "../../public/Competition.png";
import BusinessModelArrow from "../../public/BsModel.png";
import MarketSize from "../../public/MarketSize.png";
import investmentsDots from "../../public/investmentDots.svg";
import investments_lines_svg from "../../public/InvestmentLines.svg";

export default function Investments() {
  const {
    investments_page,
    investments_container,
    as_of_March,
    as_of_March_p,
    competion_,
    BusinessModel,
    marketSize,
    mcb_images,
    mcb_headers,
    mcb_p,
    investmentsDots_image,
    investments_lines,
  } = styles;
  return (
    <div className={investments_page}>
      <div className={investmentsDots_image}>
        <Image src={investmentsDots} alt="investmentsDots_image" />
      </div>
      <div className={investments_container}>
        <div className={competion_}>
          <div>
            <Image
              src={competionArrow}
              alt="competionArrow-image"
              className={mcb_images}
            />
          </div>
          <div className={mcb_headers}>The Competition</div>
          <p className={mcb_p} style={{ color: "#5e5e5e" }}>
            OpenTech Fund is the inaugural tech-focused ventures collective
            setting itself apart with a distinctive market niche. With no direct
            competitors, the fund presents a novel value proposition,
            establishing itself as a trailblazer that can capitalize on emerging
            opportunities and drive the growth of tech startups.
          </p>
        </div>
        <div className={BusinessModel}>
          <div>
            <Image
              src={BusinessModelArrow}
              alt="BusinessModelArrow-image"
              className={mcb_images}
            />
          </div>
          <div className={mcb_headers}>Business Model</div>
          <p className={mcb_p} style={{ color: "#000000" }}>
            OpenTech Fund operates an open fund model. We guarantee equitable
            access to capital for all entrepreneurs, establishing a level
            playing field for tomorrow&#39;s tech titans. Our innovative
            investment strategy harnesses emerging technologies and financial
            instruments, enabling us to fuel the growth of pioneering ventures
            and shape the future of the tech industry.
          </p>
        </div>
        <div className={marketSize}>
          <div>
            <Image
              src={MarketSize}
              alt="MarketSize-image"
              className={mcb_images}
            />
          </div>
          <div className={mcb_headers} style={{ color: "#FFFFFF" }}>
            Market Size
          </div>
          <p className={mcb_p}>
            The tech industry in Africa is rapidly growing, with a market size
            projected to reach $345 billion by 2025, driven by an increasing
            population, rising mobile phone adoption, and expanding internet
            connectivity. OpenFund is well-positioned to tap into this market by
            investing in and supporting innovative, tech-driv en businesses.
          </p>
        </div>
      </div>
      <div className={as_of_March}>
        <div className={as_of_March_p}>
          As of March 2023, the fund&#39;s AUM totaled $5 million, with $3
          million uncommitted and $2 million committed to investments.
        </div>
      </div>
      <div>
        <Image
          src={investments_lines_svg}
          alt="investments_lines_svg"
          className={investments_lines}
        />
      </div>
    </div>
  );
}
