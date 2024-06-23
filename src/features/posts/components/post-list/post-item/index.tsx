import type { Post } from "@/types/Post";

type Props = {
  post: Post;
};

const PostItem = ({ post: { title } }: Props) => <h2>{title}</h2>;

export default PostItem;
