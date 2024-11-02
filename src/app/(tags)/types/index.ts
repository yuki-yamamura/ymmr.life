import type { MicroCMSListContent } from "microcms-js-sdk";

export type Tag = {
  slug: string;
  name: string;
} & MicroCMSListContent;
