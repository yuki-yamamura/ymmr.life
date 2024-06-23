import type { MicroCMSListContent } from "microcms-js-sdk";
import type { Tag } from "@/types/Tag";

export type Post = {
  title: string;
  description: string;
  body: string;
  tags: Tag[];
} & MicroCMSListContent;
