import { getPuzzleInput } from "../utils";
const input = getPuzzleInput("day03");

export default function part2(input: string) {
  const lines = input.split("\n");
  let result = 0;
  let number = "";
  let isAdjToGear = false;
  let gears = [];
  let gearsMap = new Map<string, number[]>();

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (isDigit({ row: i, col: j }, lines)) {
        number += lines[i][j];
        let gearResult = isAdjacentToGearSymbol({ row: i, col: j }, lines);
        if (gearResult.adjacent) {
          isAdjToGear = true;
          gears.push(
            ...gearResult.gears.map(
              (coordinates) => `${coordinates.x},${coordinates.y}`
            )
          );
        }
        continue;
      }

      if (!isDigit({ row: i, col: j }, lines)) {
        if (isAdjToGear) {
          const currentNumber = parseInt(number);
          gears.forEach((gear) => {
            if (!gearsMap.has(gear)) {
              gearsMap.set(gear, []);
            }
            gearsMap.get(gear)?.push(currentNumber);
          });
        }
        number = "";
        isAdjToGear = false;
        gears = [];
        continue;
      }
    }
  }
  gearsMap.forEach((serialNumbers, gear) => {
    const uniqueSerialNumbers = [...new Set(serialNumbers)];

    if (uniqueSerialNumbers.length == 2) {
      const ratio = uniqueSerialNumbers[0] * uniqueSerialNumbers[1];

      result += ratio;
    }
  });

  return result;
}

function isDigit(position: { row: number; col: number }, lines: string[]) {
  const item = lines[position.row][position.col];
  return /\d/.test(item);
}

function isGear(
  position: { row: number; col: number },
  lines: string[]
): boolean {
  const item = lines[position.row][position.col];
  return /\*/.test(item);
}

function isAdjacentToGearSymbol(
  position: { row: number; col: number },
  lines: string[]
): { adjacent: boolean; gears: { x: number; y: number }[] } {
  let result = { adjacent: false, gears: [] as { x: number; y: number }[] };

  let maxX = lines.length - 1;
  let maxY = lines[0].length - 1;
  for (let x = position.col - 1; x <= position.col + 1; x++) {
    if (x < 0 || x > maxX) continue;
    for (let y = position.row - 1; y <= position.row + 1; y++) {
      if (y < 0 || y > maxY) continue;
      if (x == position.col && y == position.row) continue;

      if (isGear({ row: y, col: x }, lines)) {
        result.adjacent = true;
        result.gears.push({ x, y });
      }
    }
  }

  return result;
}
