import type { MicroCMSImage } from "microcms-js-sdk";

import styles from "./index.module.scss";

export type PostItemProps = {
  post: {
    title: string;
    body: string;
    thumbnail: MicroCMSImage;
  };
};

export const PostItem = ({ post }: PostItemProps) => (
  <div>
    <h2 className={styles.title}>{post.title}</h2>
    <img src={post.thumbnail.url} alt="" width={200} height={200} />
    <div dangerouslySetInnerHTML={{ __html: post.body }} />
  </div>
);
