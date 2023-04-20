// export interface BlogPost {
//   title: string;
//   slug: {
//     current: string;
//   };
//   body: any;
// }

import { Block } from "typescript";

export type BlogPost = {
  title: string;
  body: Block[];
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
};

export interface PostData {
  [x: string]: any;
  _id: string;
  title: string;
  body: string;
  author: {
    name: string;
    avatar: {
      asset: {
        url: string;
      };
    };
  };
  categories: string[];
  mainImage: string;
  publishedAt: string;
  slug: string;
}
