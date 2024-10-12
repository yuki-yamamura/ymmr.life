import type { TechPost } from "@/features/tech/types";

import styles from "./presenter.module.scss";

type Props = {
  posts: TechPost[];
};

export const PostList = ({ posts }: Props) => (
  <ul className={styles.module}>
    {posts.map((post) => (
      <li key={post.id}>
        <h2>{post.title}</h2>
        <img src={post.thumbnail.url} alt="" width={200} height={200} />
      </li>
    ))}
  </ul>
);
