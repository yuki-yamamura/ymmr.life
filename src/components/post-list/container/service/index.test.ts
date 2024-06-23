import { fetchPosts } from "./";
import { fakeResponse } from "../__mock__/fixture";
import { http, HttpResponse } from "msw";
import { server } from "@/mocks/node";

const handler = http.get(
  "https://service-domain.microcms.io/api/v1/posts",
  () => {
    return HttpResponse.json(fakeResponse);
  }
);

beforeEach(() => {
  server.use(handler);
});

describe("fetchPosts", () => {
  test("returns a list of posts", async () => {
    const expected = fakeResponse.contents;

    const result = await fetchPosts();

    expect(result).toStrictEqual(expected);
  });
});
