import type { Post } from "@/app/_types";
import { formatDate } from "@/lib/dayjs";
import styles from "./index.module.scss";
import { Link } from "@/components/Link";
import { TagGroup } from "../TagGroup";

export type PostItemProps = {
  post: Pick<Post, "id" | "title" | "publishedAt" | "updatedAt" | "tags">;
};

export const PostItem = ({
  post: { id, title, publishedAt, updatedAt, tags },
}: PostItemProps) => {
  const formattedDate = formatDate(publishedAt ?? updatedAt);
  return (
    <div>
      <time dateTime={publishedAt} className={styles.date}>
        {formattedDate}
      </time>
      <h2 className={styles.title}>
        <Link href={`/posts/${id}`} className={styles.link}>
          {title}
        </Link>
      </h2>
      <hr className={styles.rule} />
      <TagGroup tags={tags} />
    </div>
  );
};
