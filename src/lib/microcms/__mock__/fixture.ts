import { MICROCMS_DEFAULT_LIMIT, MICROCMS_DEFAULT_OFFSET } from "@/constants";

import type { Post } from "@/types/Post";
import type {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from "microcms-js-sdk";

export const fakePosts: Post[] = [
  {
    title: "First post",
    body: "First post content...",
  },
  {
    title: "Second post",
    body: "Second post content...",
  },
  {
    title: "Third post",
    body: "Third post content...",
  },
  {
    title: "Fourth post",
    body: "Fourth post content...",
  },
  {
    title: "Fifth post",
    body: "Fifth post content...",
  },
  {
    title: "Sixth post",
    body: "Sixth post content...",
  },
  {
    title: "Seventh post",
    body: "Seventh post content...",
  },
  {
    title: "Eighth post",
    body: "Eighth post content...",
  },
  {
    title: "Ninth post",
    body: "Ninth post content...",
  },
  {
    title: "Tenth post",
    body: "Tenth post content...",
  },
  {
    title: "Eleventh post",
    body: "Eleventh post content...",
  },
  {
    title: "Twelfth post",
    body: "Twelfth post content...",
  },
  {
    title: "Thirteenth post",
    body: "Thirteenth post content...",
  },
  {
    title: "Fourteenth post",
    body: "Fourteenth post content...",
  },
  {
    title: "Fifteenth post",
    body: "Fifteenth post content...",
  },
  {
    title: "Sixteenth post",
    body: "Sixteenth post content...",
  },
  {
    title: "Seventeenth post",
    body: "Seventeenth post content...",
  },
  {
    title: "Eighteenth post",
    body: "Eighteenth post content...",
  },
  {
    title: "Nineteenth post",
    body: "Nineteenth post content...",
  },
  {
    title: "Twentieth post",
    body: "Twentieth post content...",
  },
  {
    title: "Twenty-first post",
    body: "Twenty-first post content...",
  },
  {
    title: "Twenty-second post",
    body: "Twenty-second post content...",
  },
  {
    title: "Twenty-third post",
    body: "Twenty-third post content...",
  },
  {
    title: "Twenty-fourth post",
    body: "Twenty-fourth post content...",
  },
  {
    title: "Twenty-fifth post",
    body: "Twenty-fifth post content...",
  },
  {
    title: "Twenty-sixth post",
    body: "Twenty-sixth post content...",
  },
  {
    title: "Twenty-seventh post",
    body: "Twenty-seventh post content...",
  },
  {
    title: "Twenty-eighth post",
    body: "Twenty-eighth post content...",
  },
  {
    title: "Twenty-ninth post",
    body: "Twenty-ninth post content...",
  },
];

export const fakeResponses: MicroCMSListResponse<Post>[] = [
  {
    contents: fakePosts.slice(0, 10) as (Post &
      MicroCMSContentId &
      MicroCMSDate)[],
    totalCount: 29,
    limit: MICROCMS_DEFAULT_LIMIT,
    offset: MICROCMS_DEFAULT_OFFSET,
  },
  {
    contents: fakePosts.slice(10, 20) as (Post &
      MicroCMSContentId &
      MicroCMSDate)[],
    totalCount: 29,
    limit: MICROCMS_DEFAULT_LIMIT,
    offset: MICROCMS_DEFAULT_OFFSET + MICROCMS_DEFAULT_LIMIT,
  },
  {
    contents: fakePosts.slice(20, 30) as (Post &
      MicroCMSContentId &
      MicroCMSDate)[],
    totalCount: 29,
    limit: MICROCMS_DEFAULT_LIMIT,
    offset: MICROCMS_DEFAULT_OFFSET * MICROCMS_DEFAULT_LIMIT * 2,
  },
];

export const fakeResponse = {
  id: "id",
  title: "title",
  body: "body",
} as Post & MicroCMSContentId & MicroCMSDate;
