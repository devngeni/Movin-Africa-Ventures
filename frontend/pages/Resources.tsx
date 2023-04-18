import { Footer, Navbar } from "@/components/Landing";
import styles from "@/styles/Resources.module.css";
import Image from "next/image";
import EllipseR from "../public/ResourcesR.png";
import BlogImg from "../public/blogAssets/BlogImg.png";
import MobileBlogImg from "../public/blogAssets/MobileElllipse.png";
import { useState } from "react";

export default function Resources() {
  const {
    resources,
    discover_our_blog,
    discover_our_blog_image,
    container_discover_our,
    discovertext,
    fuelingTheGrowth,
    blogs_container,
    blog_card,
    blog_card_img,
    category,
    card_header,
    card_body,
    card_line,
    card_footer,
    readAllArticles,
    ReadAll_btn,
    ByMovinAfrica,
    dot,
    timeRead,
    card_content,
    theBigBlogContainer,
    mobile_discover_our_blog_image,
  } = styles;

  // const [activeNav, setActiveNav] = useState("#Home");

  return (
    <div className={resources}>
      <Navbar />
      <div className={discover_our_blog}>
        <Image
          src={EllipseR}
          alt="EllipseR-icon"
          className={discover_our_blog_image}
        />
        <Image
          src={MobileBlogImg}
          alt="EllipseR-icon"
          className={mobile_discover_our_blog_image}
        />
        <div className={container_discover_our}>
          <div className={discovertext}>
            Discover our blog for the latest industry trends
          </div>
          <div className={fuelingTheGrowth}>
            Unlocking the latest trends and insights in technology and beyond
          </div>
        </div>
      </div>
      <div className={theBigBlogContainer}>
        <div className={blogs_container}>
          <div className={blog_card}>
            <div className={blog_card_img}>
              <Image src={BlogImg} alt="BlogImg" className={blog_card_img} />
            </div>
            <div className={card_content}>
              <div className={category}>Business</div>
              <div className={card_header}>
                The role of technology in our lives The role of technology in
                our lives The role of technology in our lives The role of
                technology in our lives
              </div>
              <div className={card_body}>
                Technology has become an integral part of our lives, from the
                way we work to the way we communicate and entertain ourselves.
                It has revolutionized every aspect of society, from business and
                education to healthcare and entertainment. As we continue to
                advance technologically, it is important to reflect on.
              </div>
              <div className={card_line}></div>
              <div className={card_footer}>
                <div className={ByMovinAfrica}>By Movin Africa</div>
                <div className={dot}>.</div>
                <div className={timeRead}>15 Min Read</div>
              </div>
            </div>
          </div>
          <div className={blog_card}>
            <div className={blog_card_img}>
              <Image src={BlogImg} alt="BlogImg" className={blog_card_img} />
            </div>
            <div className={card_content}>
              <div className={category}>Business</div>
              <div className={card_header}>
                The role of technology in our lives The role of technology in
                our lives The role of technology in our lives The role of
                technology in our lives
              </div>
              <div className={card_body}>
                Technology has become an integral part of our lives, from the
                way we work to the way we communicate and entertain ourselves.
                It has revolutionized every aspect of society, from business and
                education to healthcare and entertainment. As we continue to
                advance technologically, it is important to reflect on.
              </div>
              <div className={card_line}></div>
              <div className={card_footer}>
                <div className={ByMovinAfrica}>By Movin Africa</div>
                <div className={dot}>.</div>
                <div className={timeRead}>15 Min Read</div>
              </div>
            </div>
          </div>
          <div className={blog_card}>
            <div className={blog_card_img}>
              <Image src={BlogImg} alt="BlogImg" className={blog_card_img} />
            </div>
            <div className={card_content}>
              <div className={category}>Business</div>
              <div className={card_header}>
                The role of technology in our lives The role of technology in
                our lives The role of technology in our lives The role of
                technology in our lives
              </div>
              <div className={card_body}>
                Technology has become an integral part of our lives, from the
                way we work to the way we communicate and entertain ourselves.
                It has revolutionized every aspect of society, from business and
                education to healthcare and entertainment. As we continue to
                advance technologically, it is important to reflect on.
              </div>
              <div className={card_line}></div>
              <div className={card_footer}>
                <div className={ByMovinAfrica}>By Movin Africa</div>
                <div className={dot}>.</div>
                <div className={timeRead}>15 Min Read</div>
              </div>
            </div>
          </div>
          <div className={blog_card}>
            <div className={blog_card_img}>
              <Image src={BlogImg} alt="BlogImg" className={blog_card_img} />
            </div>
            <div className={card_content}>
              <div className={category}>Business</div>
              <div className={card_header}>
                The role of technology in our lives The role of technology in
                our lives The role of technology in our lives The role of
                technology in our lives
              </div>
              <div className={card_body}>
                Technology has become an integral part of our lives, from the
                way we work to the way we communicate and entertain ourselves.
                It has revolutionized every aspect of society, from business and
                education to healthcare and entertainment. As we continue to
                advance technologically, it is important to reflect on.
              </div>
              <div className={card_line}></div>
              <div className={card_footer}>
                <div className={ByMovinAfrica}>By Movin Africa</div>
                <div className={dot}>.</div>
                <div className={timeRead}>15 Min Read</div>
              </div>
            </div>
          </div>
          <div className={blog_card}>
            <div className={blog_card_img}>
              <Image src={BlogImg} alt="BlogImg" className={blog_card_img} />
            </div>
            <div className={card_content}>
              <div className={category}>Business</div>
              <div className={card_header}>
                The role of technology in our lives The role of technology in
                our lives The role of technology in our lives The role of
                technology in our lives
              </div>
              <div className={card_body}>
                Technology has become an integral part of our lives, from the
                way we work to the way we communicate and entertain ourselves.
                It has revolutionized every aspect of society, from business and
                education to healthcare and entertainment. As we continue to
                advance technologically, it is important to reflect on.
              </div>
              <div className={card_line}></div>
              <div className={card_footer}>
                <div className={ByMovinAfrica}>By Movin Africa</div>
                <div className={dot}>.</div>
                <div className={timeRead}>15 Min Read</div>
              </div>
            </div>
          </div>
          <div className={blog_card}>
            <div className={blog_card_img}>
              <Image src={BlogImg} alt="BlogImg" className={blog_card_img} />
            </div>

            <div className={card_content}>
              <div className={category}>Business</div>
              <div className={card_header}>
                The role of technology in our lives The role of technology in
                our lives The role of technology in our lives The role of
                technology in our lives
              </div>
              <div className={card_body}>
                Technology has become an integral part of our lives, from the
                way we work to the way we communicate and entertain ourselves.
                It has revolutionized every aspect of society, from business and
                education to healthcare and entertainment. As we continue to
                advance technologically, it is important to reflect on.
              </div>
              <div className={card_line}></div>
              <div className={card_footer}>
                <div className={ByMovinAfrica}>By Movin Africa</div>
                <div className={dot}>.</div>
                <div className={timeRead}>15 Min Read</div>
              </div>
            </div>
          </div>
          <div className={blog_card}>
            <div className={blog_card_img}>
              <Image src={BlogImg} alt="BlogImg" className={blog_card_img} />
            </div>
            <div className={card_content}>
              <div className={category}>Business</div>
              <div className={card_header}>
                The role of technology in our lives The role of technology in
                our lives The role of technology in our lives The role of
                technology in our lives
              </div>
              <div className={card_body}>
                Technology has become an integral part of our lives, from the
                way we work to the way we communicate and entertain ourselves.
                It has revolutionized every aspect of society, from business and
                education to healthcare and entertainment. As we continue to
                advance technologically, it is important to reflect on.
              </div>
              <div className={card_line}></div>
              <div className={card_footer}>
                <div className={ByMovinAfrica}>By Movin Africa</div>
                <div className={dot}>.</div>
                <div className={timeRead}>15 Min Read</div>
              </div>
            </div>
          </div>
        </div>
        <div className={readAllArticles}>
          <button className={ReadAll_btn}>Show More</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
