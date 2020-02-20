module.exports = function countCats(matrix) {
  return matrix.flat().filter(i => i == "^^").length;
};
