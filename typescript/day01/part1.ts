import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day01");

// Had a nested for loop method for the answer, but refactored it to below.
// Which is shit and unreadable an no one should ever actually write code like this.

export default function part1(input: string) {
  return input
    .split("\n")
    .map((line) => line.split("").filter((item) => Number(item)))
    .map((nums) => nums[0] + nums[nums.length - 1])
    .map(Number)
    .reduce((prev, cur) => prev + cur);
}

/*
Explanation:
Turn each line into an array.
Filter out all the letters so you just have numbers left
Turn each array into the concat of the first and the last number (string)
map and reduce the final array.
*/
