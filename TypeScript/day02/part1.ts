import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day02");

export default function part1(input: string) {
  const lines = input.split("\n");

  const games = lines
    .map((line) => line.split(":"))
    .map((game) =>
      game[1]
        .split(";")
        .map((set) => set.split(",").map((item) => item.trim().split(" ")))
    );

  const rules: { [k: string]: number } = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const possibleGames = games
    .map((game) =>
      game
        .map((set) =>
          set.every(([score, colour]) => Number(score) <= rules[colour])
        )
        .every((possible) => possible)
    )
    .map((outcome, index) => outcome && index + 1);

  return possibleGames.reduce((prev, cur) => Number(prev) + Number(cur));
}
