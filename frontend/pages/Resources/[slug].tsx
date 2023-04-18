import { Footer, Navbar } from "@/components/Landing";
import styles from "@/styles/Slug.module.css";
import { useRouter } from "next/router";
import TopNavImage from "../../public/blogAssets/TopNavImg.png";
import BlogImage from "../../public/blogAssets/BlogImg.png";
import Image from "next/image";
import Link from "next/link";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);

  const {
    slup_page,
    topnarimg,
    BlogContent_container,
    content_container,
    titleContainer,
    category_time,
    Blogtitle,
    ByMoving_date,
    dateDot,
    socials_share,
    Blog_Image,
    Body,
    relatedArticle_container,
    relatedArticles,
    relatedArticles_Card,
    blogLine,
    relatedArticles_header,
    categoryRelatedArticles,
    RelatedArticletitle,
  } = styles;

  return (
    <div className={slup_page}>
      <Navbar />
      <div className={topnarimg}>
        <Image src={TopNavImage} alt="topNavimg" className={topnarimg} />
      </div>
      <div className={content_container}>
        <div className={BlogContent_container}>
          <div className={titleContainer}>
            <div className={category_time}>
              <div>Technoloy</div>
              <div className={dateDot}>.</div>
              <div>15 Min Read</div>
            </div>
            <div className={Blogtitle}>The Role of Technology in Our Lives</div>
            <div className={ByMoving_date}>
              <div>By Movin.Africa</div>
              <div className={dateDot}>.</div>
              <div>4th April 2023</div>
            </div>
          </div>
          <div className={socials_share}>
            <div className="">A</div>
            <div className="">B</div>
            <div className="">C</div>
          </div>

          <div className={Blog_Image}>
            <Image src={BlogImage} alt="" className={Blog_Image} />
          </div>
          <div className={Body}>
            Technology has become an integral part of our lives, from the way we
            work to the way we communicate and entertain ourselves. It has
            revolutionized every aspect of society, from business and education
            to healthcare and entertainment. As we continue to advance
            technologically, it is important to reflect on the role that
            technology plays in our lives and the impact it has on our society
            as a whole. One of the most significant ways that technology has
            impacted our lives is through communication. With the advent of the
            internet and social media, we are now able to connect with people
            from all over the world at any time of day. This has revolutionized
            the way we communicate, making it easier than ever to stay in touch
            with friends and family, collaborate with colleagues, and build
            online communities. Technology has also transformed the way we work.
            Remote work has become increasingly popular, with more and more
            companies adopting flexible work policies and utilizing digital
            tools to communicate and collaborate. This has given workers more
            autonomy and flexibility in their work schedules, while also
            allowing companies to access a wider pool of talent and reduce
            overhead costs. In the realm of healthcare, technology has brought
            about significant advancements in medical treatments and research.
            From telemedicine to artificial intelligence, technology is being
            used to improve patient outcomes and enhance the accuracy of medical
            diagnoses. Wearable devices, such as fitness trackers and
            smartwatches, have also become increasingly popular, allowing
            individuals to monitor their health and track their fitness goals.
            blue used to improve patient outcomes and enhance the accuracy of
            medical diagnoses. Wearable devices, such as fitness trackers and
            smartwatches, have also become increasingly popular, allowing
            individuals to monitor their health and track their fitness goals.
          </div>
        </div>
        <div className={relatedArticle_container}>
          <div className={blogLine}></div>
          <div className={relatedArticles_header}>Related </div>
          <div className={relatedArticles}>
            <Link href={`/Resources/${"promodo"}`}>
              <div className={relatedArticles_Card}>
                <Image src={BlogImage} alt="" />
                <div className={categoryRelatedArticles}>category</div>
                <div className={RelatedArticletitle}>
                  The promodo Time pps in 2023 time apps
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
