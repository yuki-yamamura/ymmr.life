import { http, HttpResponse } from "msw";
import { fakeResponse, fakeResponses } from "./fixture";

import type { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [
  http.get("https://service-domain.microcms.io/api/v1/posts", ({ request }) => {
    const url = new URL(request.url);
    const offset = url.searchParams.get("offset");

    switch (offset) {
      case "0": {
        return HttpResponse.json(fakeResponses[0]);
      }
      case "10": {
        return HttpResponse.json(fakeResponses[1]);
      }
      case "20": {
        return HttpResponse.json(fakeResponses[2]);
      }
      default: {
        return HttpResponse.json({ status: 404 });
      }
    }
  }),

  http.get("https://service-domain.microcms.io/api/v1/posts/id", () => {
    return HttpResponse.json(fakeResponse);
  }),
];
