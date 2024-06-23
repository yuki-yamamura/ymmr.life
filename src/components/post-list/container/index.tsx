import Component from "../presenter";
import { fetchPosts } from "./service";

const Container = async () => {
  const posts = await fetchPosts();

  return <Component posts={posts} />;
};

export default Container;
