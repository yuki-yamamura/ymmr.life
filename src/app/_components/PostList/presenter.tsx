import { PostItem } from "../PostItem";
import { ComponentPropsWithoutRef } from "react";

import styles from "./presenter.module.scss";

type Props = {
  posts: ComponentPropsWithoutRef<typeof PostItem>["post"][];
};

export const PostList = ({ posts }: Props) => (
  <ul className={styles.module}>
    {posts.map((post, index) => (
      <li key={index} className={styles.item}>
        <PostItem post={post} />
      </li>
    ))}
  </ul>
);
