import { example, part1 } from "../data/day2.js";

const solvePart1 = (data) => {
  let [x, y] = [0, 0];
  data.forEach(({ op, value }) => {
    switch (op) {
      case "forward":
        x += value;
        break;

      case "down":
        y += value;
        break;

      case "up":
        y -= value;
        break;
    }
  });

  return x * y;
};

const solvePart2 = (data) => {
  let [x, y, aim] = [0, 0, 0];
  data.forEach(({ op, value }) => {
    switch (op) {
      case "forward":
        x += value;
        y += value * aim;
        break;

      case "down":
        aim += value;
        break;

      case "up":
        aim -= value;
        break;
    }
  });

  return x * y;
};

export const day2Example1 = () => solvePart1(example);
export const day2Solution1 = () => solvePart1(part1);
export const day2Example2 = () => solvePart2(example);
export const day2Solution2 = () => solvePart2(part1);
