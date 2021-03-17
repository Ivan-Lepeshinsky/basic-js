const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        count = this.calculateDepth(arr[i]);
        if (count > depth) {
          depth = count;
        }
      }
    }
    return depth + 1;
  }
};
