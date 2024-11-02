import { getRecentPosts } from "@/app/(home)/api";
import { PostList as Component } from "./presenter";
import { parseMarkdownToHtml } from "@/lib/unified";

export const PostList = async () => {
  const recentPosts = await getRecentPosts();
  const markdownPosts = await Promise.all(
    recentPosts.map(async (post) => ({
      ...post,
      body: await parseMarkdownToHtml(post.body),
    }))
  );

  return <Component posts={markdownPosts} />;
};
