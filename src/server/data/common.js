export const textToArrayOfInt = (text) => {
  return text.split("\n").map((value) => parseInt(value));
};

export const textToArrayOfTupleOpValue = (text) => {
  return text.split("\n").map((row) => {
    const [op, value] = row.split(" ");
    return { op, value: parseInt(value) };
  });
};

export const textToBinaryMatrix = (text) => {
  return text.split("\n").map((row) => row.split("").map((b) => parseInt(b)));
};

export const binaryArrayToString = (arr) => {
  return arr.map((b) => b.toString()).join("");
};

export const binaryStringInverse = (bs) => {
  return bs
    .split("")
    .map((b) => (b === "0" ? "1" : "0"))
    .join("");
};

export const binaryStringToNumber = (b) => {
  return parseInt(b, 2);
};

export const textToNumbersArray = (text) => {
  return text.split(",").map((n) => parseInt(n));
};

export const textToBingoBoards = (text) => {
  return text.split("\n\n").map((textBoard) => {
    const rows = textBoard.split("\n").map((row) =>
      row
        .trim()
        .split(/\s+/)
        .map((n) => parseInt(n))
    );

    const columns = [...rows.map((_) => [])];

    rows.forEach((row) => {
      row.forEach((num, j) => {
        columns[j].push(num);
      });
    });

    return { rows, columns };
  });
};

const vectorLength = ([[x1, y1], [x2, y2]]) => {
  return Math.abs(y2 - y1) + Math.abs(x2 - x1);
};

const sortVectors = (v1, v2) => {
  return vectorLength(v1) - vectorLength(v2);
};

const sortCoords = ([x1, y1], [x2, y2]) => {
  return x1 + y1 - (x2 + y2);
};

export const textToVector = (text) => {
  let vectors = text.split("\n").map((v) => {
    return v.split(" -> ").map((c) => c.split(",").map((n) => parseInt(n)));
  });
  vectors = vectors.map((v) => v.sort(sortCoords));
  return vectors.sort(sortVectors);
};
