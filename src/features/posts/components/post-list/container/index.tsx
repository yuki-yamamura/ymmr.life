import { fetchPosts } from "@/features/posts/logic/fetch-posts";
import Component from "../presenter";

const Container = async () => {
  const posts = await fetchPosts();

  return <Component posts={posts} />;
};

export default Container;
