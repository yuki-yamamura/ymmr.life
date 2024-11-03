import type { MicroCMSListContent } from "microcms-js-sdk";
import { compareByPublishDate, getRecentPosts } from ".";
import { server } from "@/mocks/node";
import { handlers } from "./__mock__/msw";
import {
  firstBlogPost,
  firstTechPost,
  secondBlogPost,
  secondTechPost,
} from "./__mock__/fakeData";

describe("compareByPublishDate", () => {
  describe("should return 0 if either post has no publish date", () => {
    test.each<
      [
        Pick<MicroCMSListContent, "publishedAt">,
        Pick<MicroCMSListContent, "publishedAt">,
        number
      ]
    >([
      [{ publishedAt: undefined }, { publishedAt: undefined }, 0],
      [
        { publishedAt: undefined },
        { publishedAt: "2024-10-12T03:55:22.752Z" },
        0,
      ],
      [
        { publishedAt: "2024-10-12T03:55:22.752Z" },
        { publishedAt: undefined },
        0,
      ],
    ])("%o and %o -> %i", (a, b, expected) => {
      const result = compareByPublishDate(a, b);

      expect(result).toBe(expected);
    });
  });

  describe("should return a negative number if the former post is newer", () => {
    test.each<
      [
        Pick<MicroCMSListContent, "publishedAt">,
        Pick<MicroCMSListContent, "publishedAt">,
        number
      ]
    >([
      [
        { publishedAt: "2024-10-12T03:55:22.752Z" },
        { publishedAt: "2024-10-12T03:55:22.751Z" },
        -1,
      ],
    ])("%o and %o -> %i", (a, b, expected) => {
      const result = compareByPublishDate(a, b);

      expect(result).toBe(expected);
    });
  });

  describe("should return a position number if the former post is older", () => {
    test.each<
      [
        Pick<MicroCMSListContent, "publishedAt">,
        Pick<MicroCMSListContent, "publishedAt">,
        number
      ]
    >([
      [
        { publishedAt: "2024-10-12T03:55:22.751Z" },
        { publishedAt: "2024-10-12T03:55:22.752Z" },
        1,
      ],
    ])("%o and %o -> %i", (a, b, expected) => {
      const result = compareByPublishDate(a, b);

      expect(result).toBe(expected);
    });
  });
});

describe("getRecentPosts", () => {
  beforeEach(() => {
    server.use(...handlers);
  });
  afterEach(() => {
    server.resetHandlers();
  });

  test("should fetch the latest posts ordered by descending", async () => {
    const result = await getRecentPosts();

    expect(result).toEqual([
      secondBlogPost,
      secondTechPost,
      firstTechPost,
      firstBlogPost,
    ]);
  });
});
