import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import { unified } from "unified";

const parseMarkdownToHtml = async (markdownContent: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "vitesse-light",
    })
    .use(rehypeStringify)
    .process(markdownContent);

  return file.toString();
};

export { parseMarkdownToHtml };
