import type { TechPost } from "@/features/tech/types";

import styles from "./presenter.module.scss";
import { PostItem } from "./PostItem";

type Props = {
  posts: TechPost[];
};

export const PostList = ({ posts }: Props) => (
  <ul className={styles.module}>
    {posts.map((post) => (
      <li key={post.id}>
        <PostItem post={post} />
      </li>
    ))}
  </ul>
);
