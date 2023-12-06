import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day06");

export default function part2(input: string) {
  const [timeData, distanceData] = input.split("\n");

  const times = [
    timeData
      .split(" ")
      .filter((item) => item != "")
      .splice(1)
      .join(""),
  ];
  const distances = [
    distanceData
      .split(" ")
      .filter((item) => item != "")
      .splice(1)
      .join(""),
  ];

  const results = times.map((time, index) => {
    const t = parseInt(time);
    const d = parseInt(distances[index]);
    let waysToWin = 0;

    for (let i = 0; i <= t; i++) {
      if (i * (t - i) > d) {
        waysToWin++;
      }
    }
    return waysToWin;
  });

  return results.reduce((prev, cur) => prev * cur);
}
