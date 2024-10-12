import { getPosts } from "@/features/tech/api";
import { PostList as Component } from "./presenter";

export const PostList = async () => {
  const posts = await getPosts();

  return <Component posts={posts} />;
};
