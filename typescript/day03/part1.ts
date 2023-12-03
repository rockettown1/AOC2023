import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day03");

export default function part1(input: string) {
  const lines = input.split("\n");

  let number = "";
  let isAdj = false;
  let results = [];

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (isDigit({ row: i, col: j }, lines)) {
        number += lines[i][j];
        isAdj = isAdj || isAdjacent({ row: i, col: j }, lines);
        continue;
      }

      if (!isDigit({ row: i, col: j }, lines)) {
        if (isAdj) {
          results.push(Number(number));
        }
        number = "";
        isAdj = false;
        continue;
      }
    }
  }

  return results.reduce((prev, cur) => prev + cur, 0);
}

function isDigit(position: { row: number; col: number }, lines: string[]) {
  const item = lines[position.row][position.col];
  return /\d/.test(item);
}

function isSymbol(position: { row: number; col: number }, lines: string[]) {
  const item = lines[position.row][position.col];
  return !/\d|[\.]/.test(item);
}
function isAdjacent(
  position: { row: number; col: number },
  lines: string[]
): boolean {
  let result = false;
  let maxX = lines.length - 1;
  let maxY = lines[0].length - 1;
  for (let x = position.col - 1; x <= position.col + 1; x++) {
    if (x < 0 || x > maxX) continue;
    for (let y = position.row - 1; y <= position.row + 1; y++) {
      if (y < 0 || y > maxY) continue;
      if (x == position.col && y == position.row) continue;

      result = result || isSymbol({ row: y, col: x }, lines);
      if (result) {
        break;
      }
    }
  }

  return result;
}
