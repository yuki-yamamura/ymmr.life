import { PostList } from "@/app/_components/PostList";
import { Link } from "@/components/Link";

export default function Home() {
  return (
    <div>
      <PostList />
      <Link>Go to example.com</Link>
      <Link href="/about">Go to about page</Link>
    </div>
  );
}
