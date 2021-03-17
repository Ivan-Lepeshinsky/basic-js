const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  let add = "";
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition = options.addition === undefined ? "" : options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";

  for (i = 0; i < repeatTimes; i++) {
    result += str;
    add = "";
    for (j = 0; j < additionRepeatTimes; j++) {
      add += addition;
      if (j !== additionRepeatTimes - 1) {
        add += additionSeparator;
      }
    }

    result += add;
    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};
