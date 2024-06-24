import React from "react";
import rehypePrism from "rehype-prism-plus";
import rehypeReact, { Options } from "rehype-react";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import * as prod from "react/jsx-runtime";

export async function convertMarkdownIntoJSX(
  markdownContent: string
): Promise<JSX.Element> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeReact, {
      Fragment: React.Fragment,
      jsx: prod.jsx,
      jsxs: prod.jsxs,
    } as Options)
    .process(markdownContent);

  return file.result;
}
