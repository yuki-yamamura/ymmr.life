import type { BlogPost } from "@/app/(posts)/(blog)/types";
import { client } from "@/lib/microcms/client";
import { GetAllContentRequest } from "microcms-js-sdk";

export const getBlogPosts = async (
  queries?: GetAllContentRequest["queries"]
): Promise<BlogPost[]> => {
  const posts = await client.getAllContents<BlogPost>({
    endpoint: "blog",
    queries,
  });

  return posts;
};
