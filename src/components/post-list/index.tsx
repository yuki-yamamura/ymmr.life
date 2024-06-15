import PostItem from "./post-item";

type Props = {
  posts: {
    title: string;
    body: string;
  }[];
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
