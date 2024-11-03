import { Tag } from "@/app/(tags)/types";
import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type BlogPost = {
  title: string;
  body: string;
  tags: Tag[];
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;
