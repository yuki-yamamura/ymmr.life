import { server } from "@/mocks";
import { getPhotos } from "./";
import { data, handlers } from "../__mocks__";

beforeEach(() => {
  server.use(...handlers);
});

describe("getPhotos", () => {
  it("returns an array of photos", async () => {
    const result = await getPhotos();
    expect(result).toEqual(data);
  });
});
