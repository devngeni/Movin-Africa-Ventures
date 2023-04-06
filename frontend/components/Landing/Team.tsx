import styles from "@/styles/Team.module.css";
import Image from "next/image";
import MeberImg from "../../public/MemberImg.png";
import TeamLines from "../../public/TeamLines.svg";

export default function Team() {
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
  } = styles;
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
          <div className={member_card}>
            <div className={onhover_membercard}>
              <div className={member_name} style={{ bottom: 0 }}>
                Joel Johnson
              </div>
              <div className={onhover_membercard_descrip}>
                An accomplished finance and blockchain entrepreneur with over 18
                years of experience and a crypto native since 2013. He is a
                former investment banker and venture capital professional in
                Europe, with previous positions at Deutsche Bank, Greencoat
                Capital, and Nexus Group. Joel is a BSc graduate in Finance and
                Economics from the Kelley School of Business.
              </div>
            </div>
            <div className={member_card_container}>
              <div className={big_image_container}>
                <div className={big_image_}>
                  <Image src={MeberImg} alt="" />
                </div>
              </div>
              <div className={small_image_container}>
                <div className={small_image}>
                  <Image src={MeberImg} alt="" />
                </div>
              </div>
            </div>
            <div className={member_name_descrip}>
              <div className={member_name}>Joel Johnson</div>
              <div className={member_descrip}>
                Accomplished finance and blockchain entrepreneur.
              </div>
            </div>
          </div>
          <div className={member_card}>
            <div className={onhover_membercard}>
              <div className={member_name} style={{ bottom: 0 }}>
                Afua Amoah
              </div>
              <div className={onhover_membercard_descrip}>
                An accomplished finance and blockchain entrepreneur with over 18
                years of experience and a crypto native since 2013. He is a
                former investment banker and venture capital professional in
                Europe, with previous positions at Deutsche Bank, Greencoat
                Capital, and Nexus Group. Joel is a BSc graduate in Finance and
                Economics from the Kelley School of Business.
              </div>
            </div>
            <div className={member_card_container}>
              <div className={big_image_container}>
                <div className={big_image_}>
                  <Image src={MeberImg} alt="" />
                </div>
              </div>
              <div className={small_image_container}>
                <div className={small_image}>
                  <Image src={MeberImg} alt="" />
                </div>
              </div>
            </div>
            <div className={member_name_descrip}>
              <div className={member_name}>Afua Amoah</div>
              <div className={member_descrip}>
                Accomplished finance and blockchain entrepreneur.
              </div>
            </div>
          </div>
          <div className={member_card}>
            <div className={onhover_membercard}>
              <div className={member_name} style={{ bottom: 0 }}>
                Brian Jones
              </div>
              <div className={onhover_membercard_descrip}>
                An accomplished finance and blockchain entrepreneur with over 18
                years of experience and a crypto native since 2013. He is a
                former investment banker and venture capital professional in
                Europe, with previous positions at Deutsche Bank, Greencoat
                Capital, and Nexus Group. Joel is a BSc graduate in Finance and
                Economics from the Kelley School of Business.
              </div>
            </div>
            <div className={member_card_container}>
              <div className={big_image_container}>
                <div className={big_image_}>
                  <Image src={MeberImg} alt="" />
                </div>
              </div>
              <div className={small_image_container}>
                <div className={small_image}>
                  <Image src={MeberImg} alt="" />
                </div>
              </div>
            </div>
            <div className={member_name_descrip}>
              <div className={member_name}>Brian Jones</div>
              <div className={member_descrip}>
                Accomplished finance and blockchain entrepreneur.
              </div>
            </div>
          </div>
        </div>

        {/* no anitimations here u can update */}
        <div id={gridbottom}>
          <div className={member_card}>
            <div className={member_card_container}>
              <div className={big_image_container}>
                <div className={big_image_}>
                  <Image src={MeberImg} alt="" />
                </div>
              </div>
              <div className={small_image_container}></div>
            </div>
            <div className={member_name_descrip}>
              <div className={member_name}>Christina Storey</div>
              <div className={member_descrip}>
                Accomplished finance and blockchain entrepreneur.
              </div>
            </div>
          </div>
          <div className={member_card}>
            <div className={member_card_container}>
              <div className={big_image_container}>
                <div className={big_image_}>
                  <Image src={MeberImg} alt="" />
                </div>
              </div>
              <div className={small_image_container}></div>
            </div>
            <div className={member_name_descrip}>
              <div className={member_name}>Kevin R. Imani</div>
              <div className={member_descrip}>
                Accomplished finance and blockchain entrepreneur.
              </div>
            </div>
          </div>
          <div className={member_card}>
            <div className={member_card_container}>
              <div className={big_image_container}>
                <div className={big_image_}>
                  <Image src={MeberImg} alt="" />
                </div>
              </div>
              <div className={small_image_container}></div>
            </div>
            <div className={member_name_descrip}>
              <div className={member_name}>Susan Oh</div>
              <div className={member_descrip}>
                Accomplished finance and blockchain entrepreneur.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
