import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day01");

// Had a nested for loop method for the answer, but refactored it to below.

export default function part1(input: string) {
  const lines = input.split("\n");

  const numbers = lines
    .map((line) => line.split("").filter((item) => Number(item)))
    .map((nums) => nums[0] + nums[nums.length - 1]);

  return numbers.map(Number).reduce((prev, cur) => prev + cur);
}

/*
Explanation:
Turn each line into an array.
Filter out all the letters so you just have numbers left
Turn each array into the concat of the first and the last number (string)

map and reduce the final array.
*/
