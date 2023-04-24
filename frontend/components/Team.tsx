import styles from "@/styles/Team.module.css";
import Image, { StaticImageData } from "next/image";
import KevinImani from "../public/MemberImages/KelvinImani.jpeg";
import SusanOh from "../public/MemberImages/SusanOh.jpeg";
import BrianJones from "../public/MemberImages/BrianJones.webp";
import ChristinaStorey from "../public/MemberImages/ChristinaStorey.jpeg";
import AfuaAmoah from "../public/MemberImages/AfuaAmoah.webp";
import JoelJohnson from "../public/MemberImages/JoelJohnson.jpeg";
import TeamLines from "../public/TeamLines.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useState } from "react";
import MemberCard from "./Member";

interface Member {
  name: string;
  description: string;
  bio: string;
  image: StaticImageData;
}
const members: Member[] = [
  {
    name: "Joel Johnson",
    description:
      "Joel Johnson, an accomplished finance and blockchain entrepreneur with over 18 years of experience and a crypto native since 2013. He is a former investment banker and venture capital professional in Europe, with previous positions at Deutsche Bank, Greencoat Capital, and Nexus Group. Joel is a BSc graduate in Finance and Economics from the Kelley School of Business.",
    bio: "Accomplished finance and blockchain entrepreneur.",
    image: JoelJohnson,
  },
  {
    name: "Afua Amoah",
    description:
      "Afua Amoah, a highly experienced investment professional and financial advisor with over 20+ years of experience. She is the co-founder of ORBIT 54 and has worked as an investment banker in both Europe and the USA, having held positions at top-tier firms such as BlackRock, Deutsche Bank, Barclays, and Delwik Group.  Afua holds an MBA from Duke University's Fuqua School of Business and a BSc in Engineering from Dartmouth College.",
    bio: "A highly experienced investment professional and financial advisor",
    image: AfuaAmoah,
  },
  {
    name: "Brian Jones",
    description:
      "Brian Jones, the Founder, President, and CEO of the Agio Group, with 18+ years of leadership experience in finance, investment banking,  fund administration, strategies, and digital asset management. He is also the Chairman of the FinTech Working Group at The Bahamas Financial Services Board. Brian previously worked at Deltec, UBS, and Winterbotham Trust Company. He holds a BA in Economics from Saint John’s University in Minnesota.",
    bio: " The Founder, President, and CEO of the Agio Group.",
    image: BrianJones,
  },
  {
    name: "Christina Storey",
    description:
      "Christina Storey, a highly-experienced consultant, lawyer, and entrepreneur with 20+ years of expertise. She has worked at respected firms such as MoCafi, Cyber Capital, Canterbary Law, and Taussia Capital. Christina holds an LLB from the University of London and a BA in History & Literature from Harvard University.",
    bio: "A highly-experienced consultant, lawyer, and entrepreneur",
    image: ChristinaStorey,
  },
  {
    name: "Kevin R. Imani",
    description:
      "Kevin, a seasoned investor and the CEO of Sankore 2.0. With stakes in 20+ companies, he is also a director at Open Forest Protocol Kenya. He holds an MSc in Afrikan studies from the University of Oxford and a Bachelor’s Degree in Philosophy from KU Leuven. Kevin is also a thought leader in finance, having spoken at Davos and Bitcoinevents as a panelist and keynote speaker.",
    bio: "A seasoned investor and the CEO of Sankore 2.0.",
    image: KevinImani,
  },
  {
    name: "Susan Oh",
    description:
      "Susan Oh, an experienced financial services consultant and board member. She currently serves on the board of the Mirae Asset Discovery Funds and is a Principal at L&W Partners. She has previously held executive positions at J.P. Morgan Asset Management and Janus Henderson Investors U.S. and was an analyst at J.P. Morgan Chase & Co.",
    bio: "An experienced financial services consultant and board member.",
    image: SusanOh,
  },
];
export default function Team() {
  const [expanded, setExpanded] = useState(false);
  const {
    team_page,
    the_team,
    meet_the_team,
    member_grid_container,
    member_card,
    gridtop,
    gridbottom,
    member_card_container,
    big_image_container,
    big_image_,
    small_image_container,
    member_name_descrip,
    member_name,
    member_descrip,
    the_team_lines,
    onhover_membercard,
    onhover_membercard_descrip,
    small_image,
    member_card_mobile,
    ReadBio_btn,
    collapse_btn,
  } = styles;

  const toggleLinks = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    const memberCardMobile = document.querySelector(`.${member_card_mobile}`);

    if (memberCardMobile) {
      const closeButton = memberCardMobile.querySelector(`.${collapse_btn}`);

      if (closeButton) {
        closeButton.addEventListener("click", () => {
          memberCardMobile.classList.remove(`hovered`);
        });
      }
    }
  });

  return (
    <div className={team_page}>
      <div className={the_team}>
        <div className={meet_the_team}>Meet The Team</div>
      </div>
      <div className={the_team_lines}>
        <Image src={TeamLines} alt="vector-icon" />
      </div>
      <div className={member_grid_container}>
        <div id={gridtop}>
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      {/* corousel for member card at mobile screens */}

      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={2}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        swipeToSlide={true}
        touchThreshold={50}
        arrows={false}
        responsive={[
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {members.map((card, index) => (
          <div className={member_card_mobile} key={index} onClick={toggleLinks}>
            <div className={onhover_membercard}>
              <div
                className={member_name}
                style={{ position: "absolute", bottom: "-25px" }}
              >
                {card.name}
              </div>
              <div className={onhover_membercard_descrip}>
                {card.description}
              </div>
            </div>
            <div className={member_card_container}>
              <div className={big_image_container}>
                <div className={big_image_}>
                  <Image src={card.image} alt={card.name} />
                </div>
              </div>
              <div className={small_image_container}>
                <div className={small_image}>
                  <Image src={card.image} alt={card.name} />
                </div>
              </div>
            </div>
            <div className={member_name_descrip}>
              <div className={member_name}>{card.name}</div>
              <div className={member_descrip}>{card.bio}</div>
              <button className={ReadBio_btn}>Read Bio</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
