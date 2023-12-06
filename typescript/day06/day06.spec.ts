import part1 from "./part1";
import part2 from "./part2";

const testInput1 = `Time:      7  15   30
Distance:  9  40  200`;

describe("day06", () => {
  describe("Part 1", () => {
    it("should return something", () => {
      expect(part1(testInput1)).toBe(288);
    });
  });
  describe("Part 2", () => {
    it("should return something", () => {
      expect(part2(testInput1)).toBe(71503);
    });
  });
});
