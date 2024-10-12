import { http, HttpHandler, HttpResponse } from "msw";
import { fakePosts } from "./fakeData";

export const handler: HttpHandler = http.get(
  "https://jsonplaceholder.typicode.com/posts",
  () => {
    return HttpResponse.json(fakePosts);
  }
);
