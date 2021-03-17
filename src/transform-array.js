const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }
  let newArr = [];
  let discard = false;
  for (let i = 0; i < arr.length; i++) {
    if (!discard) {
      if (arr[i] == "--double-next" && i !== arr.length - 1) {
        newArr.push(arr[i + 1]);
      } else if (
        arr[i] == "--double-prev" &&
        i !== 0 &&
        arr[i - 2] !== "--discard-next"
      ) {
        newArr.push(arr[i - 1]);
      } else if (
        arr[i] == "--discard-prev" &&
        arr[i - 2] !== "--discard-next"
      ) {
        newArr.pop();
      } else if (arr[i] == "--discard-next") {
        discard = true;
      } else if (
        arr[i] !== "--double-prev" &&
        arr[i] !== "--double-next" &&
        arr[i] !== "--discard-prev"
      ) {
        newArr.push(arr[i]);
      }
    } else discard = false;
  }
  return newArr;
};
