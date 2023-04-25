import React from "react";
import styles from "@/styles/ValueAdd.module.css";
import grid1img from "../public/grid1img.png";
import grid2Img from "../public/grid2Img.png";
import grid3Img from "../public/Grid3Img.png";
import grid4Img from "../public/Grid4Img.png";
import Star from "../public/Star.svg";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
export default function ValueAdd() {
  const {
    valuePage,
    grid1,
    descrip,
    grid2,
    grid3,
    grid4,
    headers,
    valueAdd_container,
    plusLines_div,
    plusLines,
    valueAddheader,
    grid3_H,
    grid3_D,
  } = styles;
  return (
    <div className={valuePage}>
      <div className={valueAdd_container}>
        <div className={valueAddheader}>
          <Fade direction="up">Value Add</Fade>
        </div>
        <div className={grid1}>
          <Image src={grid1img} alt="" />
          <div className={headers}>Financial Support</div>
          <span className={descrip}>
            Our main fund is well-equipped to provide robust and consistent
            financial support to tech companies looking to scale their
            operations. We possess the necessary resources to make a significant
            impact on a company’s growth trajectory.
          </span>
        </div>
        <div className={grid2}>
          <Image src={grid2Img} alt="engineering-img" />
          <div className={headers}>Engineering Services</div>
          <span className={descrip}>
            With a strong engineering acumen developed through ventures like
            NGENI LABs, we are well-equipped to provide comprehensive
            engineering capacity for diverse projects and businesses.
          </span>
        </div>
        <div className={grid3}>
          <Image src={grid3Img} alt="tech-image" />
          <div className={headers} id={grid3_H}>
            Tech-Knowledge Sharing
          </div>
          <span className={descrip} id={grid3_D}>
            We are an elite team of tech professionals offering guidance and
            support to help tech businesses build, scale, and achieve
            unparalleled growth.
          </span>
        </div>
        <div className={grid4}>
          <Image src={grid4Img} alt="" />
          <div className={headers}>Traction</div>
          <span className={descrip}>
            Movin Africa is making history as the first African fund to invest
            in tech-focused businesses across three continents, led by a team of
            seasoned professionals in investment, entrepreneurship, and
            community building.
          </span>
        </div>
        <div className={plusLines_div}>
          <Image src={Star} alt="plus-lines" className={plusLines} />
        </div>
      </div>
    </div>
  );
}
