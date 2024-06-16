import PostItem from "./post-item";

import type { Post } from "@/types/Post";

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => (
  <ul className="list-none">
    {posts.map((post) => (
      <li key={post.title}>
        <PostItem post={post} />
      </li>
    ))}
  </ul>
);

export default PostList;
