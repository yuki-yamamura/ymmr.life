import type { TechPost } from "@/features/tech/types";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import styles from "./index.module.scss";

type Props = {
  post: TechPost;
};

export const PostItem = ({ post }: Props) => {
  const file = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(post.body);
  const content = file.toString();

  return (
    <div>
      <h2 className={styles.title}>{post.title}</h2>
      <img src={post.thumbnail.url} alt="" width={200} height={200} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
