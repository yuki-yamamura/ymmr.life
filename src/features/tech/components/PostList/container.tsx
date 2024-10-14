import { getPosts } from "@/features/tech/api";
import { PostList as Component } from "./presenter";
import { parseMarkdownToHtml } from "@/lib/unified";

export const PostList = async () => {
  const posts = await Promise.all(
    (
      await getPosts()
    ).map(async (post) => ({
      ...post,
      body: await parseMarkdownToHtml(post.body),
    }))
  );

  return <Component posts={posts} />;
};
