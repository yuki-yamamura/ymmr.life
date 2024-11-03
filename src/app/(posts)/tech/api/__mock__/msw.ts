import { http, HttpHandler, HttpResponse } from "msw";
import { fakePosts } from "./fakeData";

const apiName = "tech";
const path = `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/${apiName}`;

export const handler: HttpHandler = http.get(path, () => {
  return HttpResponse.json({
    contents: fakePosts,
    totalCount: fakePosts.length,
    offset: 0,
    limit: 100,
  });
});
