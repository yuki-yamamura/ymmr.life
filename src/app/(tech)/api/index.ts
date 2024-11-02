import type { TechPost } from "@/app/(tech)/types";
import { client } from "@/lib/microcms/client";

export const getTechPosts = async (): Promise<TechPost[]> => {
  const posts = await client.getAllContents<TechPost>({
    endpoint: "tech",
  });

  return posts;
};
