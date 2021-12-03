export const textToArrayOfInt = (text) => {
  return text.split("\n").map((value) => parseInt(value));
};

export const textToArrayOfTupleOpValue = (text) => {
  return text.split("\n").map((row) => {
    const [op, value] = row.split(" ");
    return { op, value: parseInt(value) };
  });
};
