import { example, part1 } from "../data/day1.js";

const solvePart1 = (data) => {
  return data.reduce((previousValue, currentData, index, data) => {
    if (index === 0) {
      return previousValue;
    }

    if (currentData > data[index - 1]) {
      return previousValue + 1;
    }

    return previousValue;
  }, 0);
};

const solvePart2 = (data) => {
  let threes = [];
  for (let i = 0; i < data.length - 2; i++) {
    threes[i] = data[i] + data[i + 1] + data[i + 2];
  }
  return solvePart1(threes);
};

export const solution1Example = () => solvePart1(example);
export const solution1 = () => solvePart1(part1);
export const solution2Example = () => solvePart2(example);
export const solution2 = () => solvePart2(part1);
