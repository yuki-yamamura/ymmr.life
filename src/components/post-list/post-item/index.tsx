import type { Post } from "@/types/Post";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  const { title } = post;

  return <h2>{title}</h2>;
};

export default PostItem;
