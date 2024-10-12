import { Tag } from "@/features/tags/types";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type TechPost = {
  title: string;
  body: string;
  tags: Tag[];
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;
