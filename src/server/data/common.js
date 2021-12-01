export const textToArrayOfInt = (text) => {
  return text.split("\n").map((value) => parseInt(value));
};
