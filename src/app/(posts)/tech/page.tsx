import { PostPage } from "../_components/PostPage";
import { getTechPosts } from "./api";

const Page = async () => {
  const techPosts = await getTechPosts();
  const post = techPosts[0];

  return <PostPage post={post} />;
};

export default Page;
