import { Albums } from "@/components/albums";
import { PostList } from "@/components/post-list";

export default function Home() {
  return (
    <>
      <PostList />
      <hr className="my-4" />
      <Albums />
    </>
  );
}
