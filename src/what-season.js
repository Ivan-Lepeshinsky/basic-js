import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date + "").includes("GMT")) throw new Error("Invalid date!");
  if (date + "" == new Date()) throw new Error("Invalid date!");
  if (Object.prototype.toString.call(date) !== "[object Date]")
    throw new Error("Invalid date!");
  let s = date.getMonth();
  if (s >= 2 && s <= 4) return "spring";
  else if (s >= 5 && s <= 7) return "summer";
  else if (s >= 8 && s <= 10) return "autumn";
  else return "winter";
}
