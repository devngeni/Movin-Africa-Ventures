import { useEffect, useState } from "react";
import { Footer, Navbar } from "@/components";
import styles from "@/styles/Slug.module.css";
import { useRouter } from "next/router";
import TopNavImage from "../../public/blogAssets/TopNavImg.png";
import TopNavImageM from "../../public/blogAssets/TopNavImgM.png";
import Image from "next/image";
import { RiWhatsappLine } from "@react-icons/all-files/ri/RiWhatsappLine";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { BsPlayFill } from "@react-icons/all-files/bs/BsPlayFill";
import { PostData } from "@/config/types";
import { client } from "@/config/sanity";
import BlockContent from "@sanity/block-content-to-react";
import Loader from "@/Loader/Loader";
import { getReadingTime } from "@/utils/TimeRead";
import { getDateFormat } from "@/utils/DateFormat";
import { shareToMedia } from "@/utils/ShareToMedia";
export default function Slug() {
  const {
    slup_page,
    topnarimg,
    topnarimgMobile,
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
    block_content,
  } = styles;

  const router = useRouter();
  const { slug } = router.query;
  const [postData, setPostData] = useState<PostData | null>(null);
  const REACT_APP_dataset = process.env.NEXT_PUBLIC_DATASET;
  const REACT_APP_projectId = process.env.NEXT_PUBLIC_PROJECTID;
  useEffect(() => {
    const fetchPost = async () => {
      const [post, relatedArticlesData] = await Promise.all([
        client.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            body,
            slug,
            "author": author->{name, "avatar": avatar.asset->url},
            "categories": categories[]->title,
            "mainImage": mainImage.asset->url,
            publishedAt
          }`,
          { slug }
        ),
        client.fetch(
          `*[_type == "post" && slug.current != $slug][0...3]{
            _id,
            title,
            "categories": categories[]->title,
            "mainImage": mainImage.asset->url,
            slug
          }`,
          { slug }
        ),
      ]);
      setPostData({ ...post, relatedArticlesData });
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!postData) {
    return <Loader />;
  }

  return (
    <div className={slup_page}>
      <Navbar />
      <div className={topnarimg}>
        <Image src={TopNavImage} alt="topNavimg" className={topnarimg} />
      </div>
      <div className={topnarimgMobile}>
        <Image src={TopNavImageM} alt="topNavimg" className={topnarimgMobile} />
      </div>
      <div className={content_container}>
        {postData.slug ? (
          <div className={BlogContent_container}>
            <div className={titleContainer}>
              <div className={category_time}>
                <div>{postData.categories}</div>
                <div className={dateDot}>.</div>
                <div>{getReadingTime(postData.body)} Min Read</div>
              </div>
              <div className={Blogtitle}>{postData.title}</div>
              <div className={ByMoving_date}>
                <div>
                  {postData.author
                    ? "By " + postData.author.name
                    : "By Movin Africa"}
                </div>
                <div className={dateDot}>.</div>
                <div>{getDateFormat(postData.publishedAt)}</div>
              </div>
            </div>
            <div className={socials_share}>
              <RiWhatsappLine
                style={{ cursor: "pointer", fontSize: "20px" }}
                onClick={() => {
                  window.open(
                    `https://api.whatsapp.com/send/?&text=${shareToMedia(
                      postData
                    )}`,
                    "_blank"
                  );
                }}
              />
              <AiOutlineTwitter
                style={{ cursor: "pointer", fontSize: "20px" }}
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?text=${shareToMedia(
                      postData
                    )}`,
                    "_blank"
                  );
                }}
              />
              <BsPlayFill style={{ cursor: "pointer", fontSize: "20px" }} />
            </div>

            <div className={Blog_Image}>
              <Image
                src={postData.mainImage}
                alt=""
                className={Blog_Image}
                width={1000}
                height={540}
              />
            </div>
            <div className={Body}>
              <BlockContent
                blocks={postData.body}
                projectId={`${REACT_APP_projectId}`}
                dataset={`${REACT_APP_dataset}`}
                className={block_content}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {postData?.relatedArticlesData && (
          <div className={relatedArticle_container}>
            <div className={blogLine}></div>
            <div className={relatedArticles_header}>Related </div>
            <div className={relatedArticles}>
              {postData?.relatedArticlesData.map((article: any, index: any) =>
                article.slug ? (
                  <div
                    key={index}
                    onClick={() => {
                      router.push(`/Resources/${article.slug.current}`);
                    }}
                  >
                    <div className={relatedArticles_Card}>
                      <Image
                        src={article.mainImage}
                        alt={""}
                        width={1000}
                        height={540}
                      />
                      <div className={categoryRelatedArticles}>
                        {article.categories}
                      </div>
                      <div className={RelatedArticletitle}>{article.title}</div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
