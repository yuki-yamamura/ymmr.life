import type { Post } from "@/features/posts/types";
import { client } from "@/lib/microcms/client";

export const getPosts = async (): Promise<Post[]> => {
  const posts = await client.getAllContents<Post>({
    endpoint: "tech",
  });

  return posts;
};
