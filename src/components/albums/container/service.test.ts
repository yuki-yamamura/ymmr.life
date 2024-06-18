import { fetchAlbums } from "./service";
import { fakeAlbums } from "../__mock__/fixture";
import { http, HttpResponse } from "msw";
import { server } from "../../../mocks/node";

const handler = http.get("https://jsonplaceholder.typicode.com/albums", () => {
  return HttpResponse.json(fakeAlbums);
});

beforeEach(() => {
  server.use(handler);
});

describe("fetchAlbums", () => {
  test("should return a list of albums", async () => {
    // arrange
    const expected = fakeAlbums;

    // act
    const result = await fetchAlbums();

    // assert
    expect(result).toStrictEqual(expected);
  });
});
