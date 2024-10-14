import type { TechPost } from "@/features/tech/types";

import styles from "./index.module.scss";

type Props = {
  post: TechPost;
};

export const PostItem = ({ post }: Props) => (
  <div>
    <h2 className={styles.title}>{post.title}</h2>
    <img src={post.thumbnail.url} alt="" width={200} height={200} />
    <div dangerouslySetInnerHTML={{ __html: post.body }} />
  </div>
);
