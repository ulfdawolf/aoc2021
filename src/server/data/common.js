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
