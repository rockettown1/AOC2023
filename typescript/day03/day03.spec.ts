import part1 from "./part1";
import part2 from "./part2";

const testInput1 = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

describe("day03", () => {
  describe("Part 1", () => {
    it("should return something", () => {
      expect(part1(testInput1)).toBe(4361);
    });
  });
  describe("Part 2", () => {
    it("should return something", () => {
      expect(part2(testInput1)).toBe(467835);
    });
  });
});
