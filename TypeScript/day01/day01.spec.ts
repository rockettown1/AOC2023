import part1 from "./part1";
import part2 from "./part2";

const testInput1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const testInput2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

describe("day01", () => {
  describe("Part 1", () => {
    it("should return something", () => {
      expect(part1(testInput1)).toBe(142);
    });
  });
  describe("Part 2", () => {
    it("should return something", () => {
      expect(part2(testInput2)).toBe(281);
    });
  });
});
