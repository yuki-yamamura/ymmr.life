import type { TechPost } from "@/app/(tech)/types";
import { getTechPosts } from "@/app/(tech)/api";

// todo: get blog posts also, and merge them by publish date.
export const getRecentPosts = async (): Promise<TechPost[]> => {
  return getTechPosts();
};
