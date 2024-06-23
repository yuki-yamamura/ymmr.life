import { fetchPosts } from ".";
import { server } from "@/mocks/node";
import { fakeResponse } from "./__mock__/fixture";
import { handler } from "./__mock__/handler";

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
