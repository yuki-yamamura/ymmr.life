import type { TechPost } from "@/app/(tech)/types";
import { client } from "@/lib/microcms/client";
import { GetAllContentRequest } from "microcms-js-sdk";

export const getTechPosts = async (
  queries?: GetAllContentRequest["queries"]
): Promise<TechPost[]> => {
  const posts = await client.getAllContents<TechPost>({
    endpoint: "tech",
    queries,
  });

  return posts;
};
