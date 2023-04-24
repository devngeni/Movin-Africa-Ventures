import { Footer, Navbar } from "@/components/Landing";
import styles from "@/styles/Resources.module.css";
import Image from "next/image";
import EllipseR from "../../public/ResourcesR.png";
import MobileBlogImg from "../../public/blogAssets/MobileElllipse.png";
import React, { useEffect, useState } from "react";
import { client } from "@/config/sanity";
import { PostData } from "@/config/types";
import BlockContent from "@sanity/block-content-to-react";
import { useRouter } from "next/router";
import { getReadingTime } from "@/utils/TimeRead";

export default function Resources() {
  const REACT_APP_dataset = process.env.NEXT_PUBLIC_DATASET;
  const REACT_APP_projectId = process.env.NEXT_PUBLIC_PROJECTID;
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
    block_content,
  } = styles;

  const [blogPosts, setBlogPosts] = useState<PostData[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchPosts() {
      const response = await client.fetch(`
      *[_type == "post"]{
        _id,
        title,
        body,
        "slug": slug.current,
        "author": author->{name, "avatar": avatar.asset->url},
        "categories": categories[]->title,
        "mainImage": mainImage.asset->url,
        publishedAt
      }
      `);
      setBlogPosts(response);
    }

    fetchPosts();
  }, []);

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
          {blogPosts.map((post, index: any) =>
            post.slug ? (
              <div
                key={index}
                onClick={() => {
                  if (post.slug) {
                    router.push(`/Resources/${post.slug}`);
                  } else {
                    alert("Sorry, this post is unavailable.");
                  }
                }}
              >
                <div className={blog_card}>
                  <div className={blog_card_img}>
                    <Image
                      src={post.mainImage}
                      alt={post.mainImage}
                      className={blog_card_img}
                      width={1000}
                      height={540}
                    />
                  </div>
                  <div className={card_content}>
                    <div className={category}>{post.categories}</div>
                    <div className={card_header}>{post.title}</div>
                    <div className={card_body}>
                      <BlockContent
                        blocks={post.body}
                        projectId={`${REACT_APP_projectId}`}
                        dataset={`${REACT_APP_dataset}`}
                        className={block_content}
                      />
                    </div>
                    <div className={card_line}></div>
                    <div className={card_footer}>
                      <div className={ByMovinAfrica}>
                        {post.author
                          ? "By " + post.author.name
                          : "By Movin Africa"}
                      </div>
                      <div className={dot}>.</div>
                      <div className={timeRead}>
                        {getReadingTime(post.body)} min Read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
        <div className={readAllArticles}>
          <button className={ReadAll_btn}>Show More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
