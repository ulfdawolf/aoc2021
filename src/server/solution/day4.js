import { exampleInput, fullInput } from "../data/day4.js";

const checkBoard = (board, num) => {
  if (board.hasWon) {
    return false;
  }

  for (let i = 0; i < board.rows.length; i++) {
    board.rows[i] = board.rows[i].filter((n) => n != num);
    if (board.rows[i].length == 0) {
      board.hasWon = true;
      return true;
    }
  }

  for (let i = 0; i < board.columns.length; i++) {
    board.columns[i] = board.columns[i].filter((n) => n != num);
    if (board.columns[i].length == 0) {
      board.hasWon = true;
      return true;
    }
  }

  return false;
};

const countBoard = (board) => {
  return board.rows.flat().reduce((acc, val) => acc + val, 0);
};

const solvePart1 = ({ randoms, boards }) => {
  if (randoms.length === 0) {
    return new Error("No winner!?");
  }

  for (const num of randoms) {
    for (const board of boards) {
      if (checkBoard(board, num)) {
        return countBoard(board) * num;
      }
    }
  }

  return -1;
};

const solvePart2 = ({ randoms, boards }) => {
  if (randoms.length === 0) {
    return new Error("No winner!?");
  }

  let boardsToWin = boards.length;

  for (const num of randoms) {
    for (const board of boards) {
      if (checkBoard(board, num)) {
        boardsToWin--;
        if (boardsToWin === 0) {
          return countBoard(board) * num;
        }
      }
    }
  }

  return -1;
};

export const day4Results = {
  example1: solvePart1(exampleInput),
  solution1: solvePart1(fullInput),
  example2: solvePart2(exampleInput),
  solution2: solvePart2(fullInput),
};
