import { exampleInput, fullInput } from "../data/day3.js";
import {
  binaryArrayToString,
  binaryStringInverse,
  binaryStringToNumber,
} from "../data/common.js";

const mostCommonFromBinaryMatrix = (matrix) => {
  const common = [];
  if (matrix.length == 0) {
    return common;
  }

  for (let i = 0; i < matrix[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][i];
    }
    common[i] = sum > matrix.length / 2 ? 1 : 0;
  }

  return common;
};

const reduceBitCriteria = (matrix, keepMostCommonOrOne = true, index = 0) => {
  if (matrix.length === 1) {
    return binaryStringToNumber(binaryArrayToString(matrix[0]));
  }

  let ones = [];
  let zeros = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][index] === 1) {
      ones.push(matrix[i]);
    } else {
      zeros.push(matrix[i]);
    }
  }

  if (ones.length === zeros.length || ones.length > zeros.length) {
    if (keepMostCommonOrOne) {
      return reduceBitCriteria(ones, keepMostCommonOrOne, index + 1);
    } else {
      return reduceBitCriteria(zeros, keepMostCommonOrOne, index + 1);
    }
  }

  // ones.length < zeros.length
  if (keepMostCommonOrOne) {
    return reduceBitCriteria(zeros, keepMostCommonOrOne, index + 1);
  } else {
    return reduceBitCriteria(ones, keepMostCommonOrOne, index + 1);
  }
};

const solvePart1 = (input) => {
  let gamma = binaryArrayToString(mostCommonFromBinaryMatrix(input));
  let epsilon = binaryStringInverse(gamma);
  gamma = binaryStringToNumber(gamma);
  epsilon = binaryStringToNumber(epsilon);
  return { gamma, epsilon, result: gamma * epsilon };
};

const solvePart2 = (input) => {
  let ogr = reduceBitCriteria(input);
  let co2sr = reduceBitCriteria(input, false);
  return { ogr, co2sr, result: ogr * co2sr };
};

export const day3Results = {
  example1: solvePart1(exampleInput),
  solution1: solvePart1(fullInput),
  example2: solvePart2(exampleInput),
  solution2: solvePart2(fullInput),
};
