import type { TechPost } from "@/app/(posts)/tech/types";
import type { BlogPost } from "@/app/(posts)/(blog)/types";
import { getTechPosts } from "@/app/(posts)/tech/api";
import { getBlogPosts } from "@/app/(posts)/(blog)/api";
import type { MicroCMSListContent } from "microcms-js-sdk";

export const compareByPublishDate = (
  a: Pick<MicroCMSListContent, "publishedAt">,
  b: Pick<MicroCMSListContent, "publishedAt">
): number => {
  if (a.publishedAt === undefined) {
    return 0;
  }
  if (b.publishedAt === undefined) {
    return 0;
  }

  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
};

export const getRecentPosts = async (): Promise<(BlogPost | TechPost)[]> => {
  const posts = (await Promise.all([getBlogPosts(), getTechPosts()])).flat();
  const sortedPosts = posts.sort(compareByPublishDate);

  return sortedPosts;
};
