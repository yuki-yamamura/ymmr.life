import { client } from "@/lib/microcms/client";

import type { Post } from "@/types/Post";

export async function fetchPosts(): Promise<Post[]> {
  const res = await client.getList<Post>({
    endpoint: "posts",
  });

  return res.contents;
}
