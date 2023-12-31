import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day04");

export default function part1(input: string) {
  const lines = input.split("\n");
  const results: number[] = [];

  lines.forEach((line) => {
    const [_, numbers] = line.split(":");

    const [winningNums, myNums] = numbers
      .split("|")
      .map((num) => num.trim().split(" ").filter(Number));

    const winners: number[] = [];

    myNums.forEach((num) => {
      if (winningNums.includes(num)) {
        winners.push(Number(num));
      }
    });

    if (winners.length > 0) {
      results.push(1 * 2 ** (winners.length - 1));
    }
  });

  return results.reduce((prev, cur) => prev + cur);
}
