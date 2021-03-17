const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let newArr = matrix.flat();
  let cat = "^^";
  let hide = "";
  let result = 0;
  for (i = 0; i < newArr.length; i++) {
    hide = newArr[i];
    if (hide === cat) result = result + 1;
  }
  return result;
};
