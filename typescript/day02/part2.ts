import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day02");

export default function part2(input: string) {
  const lines = input.split("\n");
  const results: number[] = [];

  const games = lines
    .map((line) => line.split(":"))
    .map((game) =>
      game[1]
        .split(";")
        .map((set) => set.split(",").map((item) => item.trim().split(" ")))
    );

  games.forEach((game) => {
    const maxColours: { [k: string]: number } = {
      red: 0,
      green: 0,
      blue: 0,
    };

    game.forEach((set) =>
      set.forEach(([score, colour]) => {
        if (maxColours[colour] < Number(score)) {
          maxColours[colour] = Number(score);
        }
      })
    );

    const power = maxColours.red * maxColours.green * maxColours.blue;
    results.push(power);
  });

  return results.reduce((prev, cur) => prev + cur);
}
