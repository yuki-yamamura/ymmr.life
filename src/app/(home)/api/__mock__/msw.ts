import { http, HttpHandler, HttpResponse } from "msw";
import {
  firstBlogPost,
  secondBlogPost,
  firstTechPost,
  secondTechPost,
} from "./fakeData";

export const handlers: HttpHandler[] = [
  http.get(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/blog`,
    () => {
      const fakeBlogPosts = [secondBlogPost, firstBlogPost];
      return HttpResponse.json({
        contents: fakeBlogPosts,
        totalCount: fakeBlogPosts.length,
        offset: 0,
        limit: 100,
      });
    }
  ),
  http.get(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/tech`,
    () => {
      const fakeTechPosts = [secondTechPost, firstTechPost];

      return HttpResponse.json({
        contents: fakeTechPosts,
        totalCount: fakeTechPosts.length,
        offset: 0,
        limit: 100,
      });
    }
  ),
];
