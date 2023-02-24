import { formatDate } from "../utils";

describe("formatDate specs", () => {
  it("should format date", () => {
    const date = new Date("Thu Feb 23 2023 23:27:30 GMT+0300 (GMT+03:00)");
    expect(formatDate(date)).toBe("Thursday, February 23, 2023");
  });
});
