import type { TechPost } from "@/features/tech/types";
import { client } from "@/lib/microcms/client";

export const getPosts = async (): Promise<TechPost[]> => {
  const posts = await client.getAllContents<TechPost>({
    endpoint: "tech",
  });

  return posts;
};
