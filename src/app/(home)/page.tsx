import { PostList } from "@/app/_components/PostList";
import { Logo } from "@/components/Logo";

import styles from "./page.module.scss";
import { LinkButton } from "@/components/LinkButton";
import { RiArrowRightLine } from "@remixicon/react";

export default function Home() {
  return (
    <div>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h1 className={styles.heading}>Recent posts</h1>
      <PostList />
      <div className={styles.buttons}>
        <div className={styles.button}>
          <LinkButton href="/blog" rightIcon={<RiArrowRightLine />}>
            Read more blog posts
          </LinkButton>
        </div>
        <div>OR</div>
        <div className={styles.button}>
          <LinkButton href="/tech" rightIcon={<RiArrowRightLine />}>
            Read more tech posts
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
