import { getTechPosts } from ".";
import { fakePosts } from "./__mock__/fakeData";
import { server } from "@/mocks/node";
import { handler } from "./__mock__/msw";

describe("getTechPosts", () => {
  beforeEach(() => {
    server.use(handler);
  });

  test("fetches posts from the API", async () => {
    const posts = await getTechPosts();

    expect(posts).toEqual(fakePosts);
  });
});
