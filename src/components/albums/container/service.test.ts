import { afterEach, beforeEach, describe, test, expect, vi } from "vitest";
import { fetchAlbums } from "./service";
import { fakeAlbums } from "../__mock__/fixture";

describe("fetchAlbums", () => {
  beforeEach(() => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify(fakeAlbums))
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test("should return a list of albums", async () => {
    // arrange
    const expected = fakeAlbums;

    // act
    const result = await fetchAlbums();

    // assert
    expect(result).toStrictEqual(expected);
  });
});
