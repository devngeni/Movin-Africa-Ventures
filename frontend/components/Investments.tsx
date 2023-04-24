import styles from "@/styles/Investments.module.css";
import Image from "next/image";
import competionArrow from "../public/Competition.png";
import BusinessModelArrow from "../public/BsModel.png";
import MarketSize from "../public/MarketSize.png";
import investmentsDots from "../public/investmentDots.svg";
import investments_lines_svg from "../public/InvestmentLines.svg";
import MobileInvestmentLines from "../public/mobileImages/MobileInvestmentLines.svg";

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
    mobile_investments_lines,
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
            Movin Africa is a pioneering tech-focused venture collective,
            carving a unique market niche with no direct competitors. With a
            distinct value proposition, it capitalizes on emerging opportunities
            to drive the growth of tech startups, setting itself apart as a
            trailblazer.
          </p>
        </div>
        <div className={BusinessModel} id="InvestmentCriteria">
          <div>
            <Image
              src={BusinessModelArrow}
              alt="BusinessModelArrow-image"
              className={mcb_images}
            />
          </div>
          <div className={mcb_headers}>Business Model</div>
          <p className={mcb_p} style={{ color: "#000000" }}>
            Movin Africa operates an open fund model. We guarantee equitable
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
            Africa&#39;s tech industry is booming, with a $345 billion market
            size projected by 2025. Movin Africa is poised to capitalize on this
            growth by investing in and supporting innovative tech-driven
            businesses, leveraging the rising population, mobile phone adoption,
            and expanding internet connectivity in the region.
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
      <div>
        <Image
          src={MobileInvestmentLines}
          alt="investments_lines_svg"
          className={mobile_investments_lines}
        />
      </div>
    </div>
  );
}
