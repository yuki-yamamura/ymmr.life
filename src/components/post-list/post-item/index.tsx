type Props = {
  post: {
    title: string;
    body: string;
  };
};

const PostItem = ({ post }: Props) => {
  const { title } = post;

  return <h2>{title}</h2>;
};

export default PostItem;
