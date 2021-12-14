import { exampleInput } from "../data/day5.js";

const isHorOrVer = (vector) => {
  const [[x1, y1], [x2, y2]] = vector;

  const result = x1 === x2 || y1 === y2;
  console.log(x1, y1, x2, y2, result);
  return result;
};

const makeLineCoords = (vector) => {
  let coords = [];
  const [[x1, y1], [x2, y2]] = vector;
  if (x1 === x2) {
    for (let i = y1; i <= y2; i++) {
      coords.push([x1, i]);
    }
  }

  if (y1 === y2) {
    for (let i = x1; i <= x2; i++) {
      coords.push([i, y1]);
    }
  }

  return coords;
};

const 

const solvePart1 = (input) => {
  const remain = input.filter(isHorOrVer);
  const coords = remain.map(makeLineCoords);
  return coords.flat();
};

console.log(solvePart1(exampleInput));

export const day5Results = {
  example1: exampleInput,
  solution1: exampleInput,
  example2: exampleInput,
  solution2: exampleInput,
};
