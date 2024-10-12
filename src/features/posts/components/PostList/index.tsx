import { getPosts } from "@/features/posts/api";
import type { Post } from "@/features/posts/types";

import styles from "./index.module.scss";

type Props = {
  posts: Post[];
};

export const PostList = async () => {
  const posts = await getPosts();

  return <Component posts={posts} />;
};

export const Component = ({ posts }: Props) => (
  <ul className={styles.module}>
    {posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);
