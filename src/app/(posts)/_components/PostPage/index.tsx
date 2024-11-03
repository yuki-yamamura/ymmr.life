import type { Post } from "@/app/_types";
import { formatDate } from "@/lib/dayjs";
import { parseMarkdownToHtml } from "@/lib/unified";

import styles from "./index.module.scss";
import { RiQuillPenFill } from "@remixicon/react";
import { TagGroup } from "@/app/_components/TagGroup";

type Props = {
  post: Pick<
    Post,
    "title" | "body" | "thumbnail" | "publishedAt" | "updatedAt" | "tags"
  >;
};

export const PostPage = async ({
  post: { title, body, thumbnail, publishedAt, updatedAt, tags },
}: Props) => {
  const formattedDate = formatDate(publishedAt ?? updatedAt);
  const html = await parseMarkdownToHtml(body);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.date}>
          <RiQuillPenFill />
          <time dateTime={publishedAt ?? updatedAt}>{formattedDate}</time>
        </div>
        <div className={styles.container}>
          <img src={thumbnail.url} alt={title} className={styles.image} />
          <h1 className={styles.title}>
            <span>{title}</span>
          </h1>
        </div>
        <div className={styles.tagGroup}>
          <TagGroup tags={tags} />
        </div>
      </header>
      <main
        dangerouslySetInnerHTML={{ __html: html }}
        className={styles.content}
      ></main>
    </div>
  );
};
