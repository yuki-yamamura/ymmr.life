import { http, HttpResponse } from "msw";
import { fakeResponse } from ".//fixture";

export const handler = http.get(
  "https://service-domain.microcms.io/api/v1/posts",
  () => {
    return HttpResponse.json(fakeResponse);
  }
);
