import { client } from "@/lib/microcms/client";

export default async function Home() {
  const data = await client.getList<{
    title: string;
    body: string;
  }>({
    endpoint: "posts",
  });
  const postTitles = data.contents.map((post) => post.title);
  return (
    <ul>
      {postTitles.map((postTitle) => (
        <li key={postTitle}>{postTitle}</li>
      ))}
    </ul>
  );
}
