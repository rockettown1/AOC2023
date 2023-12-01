import { getPuzzleInput } from "../utils";
import part1 from "./part1";
const input = getPuzzleInput("day01");

/* 
Started with a find a replace method but just switch to brute forcing to get it done quicker.
Will come back and refactor this. maybe. probably wont.
*/

export default function part2(input: string) {
  const lines = input.split("\n");
  const numbersArr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const results: string[] = [];
  lines.forEach((line) => {
    let number = "";
    let newStr = "";
    let newStrRev = "";
    for (let i = 0; i < line.length; i++) {
      if (Number(line[i])) {
        number += line[i];
        break;
      }
      newStr += line[i];
      if (
        numbersArr.find((num) => {
          if (newStr.includes(num)) {
            number += numbersArr.indexOf(num) + 1;
          }
          return newStr.includes(num);
        })
      ) {
        break;
      }
    }
    for (let i = line.length - 1; i >= 0; i--) {
      if (Number(line[i])) {
        number += line[i];
        break;
      }
      newStrRev = line[i] + newStrRev;
      if (
        numbersArr.find((num) => {
          if (newStrRev.includes(num)) {
            number += numbersArr.indexOf(num) + 1;
          }
          return newStrRev.includes(num);
        })
      ) {
        break;
      }
    }
    results.push(number);
  });
  return results.map(Number).reduce((prev, cur) => prev + cur);
}
