import { formatDate } from ".";

describe("formatDate", () => {
  test("should return formatted date string", () => {
    const date = "2024-11-03T01:13:28.778Z";
    const result = formatDate(date);
    expect(result).toBe("2024-11-03");
  });
});
