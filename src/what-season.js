const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) !== "[object Date]")
    throw new Error("Error");
  s = date.getMonth();
  if (s >= 2 && s <= 4) return "spring";
  else if (s >= 5 && s <= 7) return "summer";
  else if (s >= 8 && s <= 10) return "autumn";
  else return "winter";
};
