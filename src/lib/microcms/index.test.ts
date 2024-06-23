import { server } from "@/mocks/node";
import { handler } from "./__mock__/handlers";
import { MicroCMSClient } from ".";
import { Post } from "@/types/Post";
import { fakePosts } from "./__mock__/fixture";

beforeEach(() => {
  server.resetHandlers(handler);
});

describe("MicroCMSClient", () => {
  describe("fetchList", () => {
    test("returns all of the data even if it is more than 10", async () => {
      const client = new MicroCMSClient<Post>("posts");
      const result = await client.fetchList();

      expect(result).toStrictEqual(fakePosts);
    });
  });
});
