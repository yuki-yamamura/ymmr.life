import { server } from "@/mocks/node";
import { handlers } from "./__mock__/handlers";
import { MicroCMSClient } from ".";
import { Post } from "@/types/Post";
import { fakePosts, fakeResponse } from "./__mock__/fixture";

beforeAll(() => {
  server.resetHandlers(...handlers);
});

describe("MicroCMSClient", () => {
  describe("fetchList", () => {
    test("returns all of the data even if it cannot be gotten at one request", async () => {
      const client = new MicroCMSClient<Post>("posts");
      const result = await client.fetchList();

      expect(result).toStrictEqual(fakePosts);
    });
  });

  describe("fetchListDetailById", () => {
    test("returns a single data specified by id", async () => {
      const client = new MicroCMSClient<Post>("posts");
      const result = await client.fetchListDetailById({ id: "id" });

      expect(result).toStrictEqual(fakeResponse);
    });
  });
});
