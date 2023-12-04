import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day04");

export default function part2(input: string) {
  const lines = input.split("\n");
  const results: { copies: number; winners: number }[] = [];

  lines.forEach((line) => {
    const numbers = line.split(":");
    numbers.splice(0, 1);

    const [winningNums, myNums] = numbers
      .map((number) => number.split("|"))
      .flat()
      .map((num) => num.trim().split(" ").filter(Number));

    const winners: number[] = [];

    myNums.forEach((num) => {
      if (winningNums.includes(num)) {
        winners.push(Number(num));
      }
    });

    results.push({ copies: 0, winners: winners.length });
  });

  for (let j = 0; j < results.length; j++) {
    let cards = results[j].copies + 1;
    while (cards > 0) {
      for (let i = j; i - j < results[j].winners; i++) {
        results[i + 1].copies++;
      }
      cards--;
    }
  }

  return results
    .map((card) => card.copies + 1)
    .reduce((prev, cur) => prev + cur);
}
