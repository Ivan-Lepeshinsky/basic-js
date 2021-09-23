import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let newArr = matrix.flat();
  let cat = "^^";
  let hide = "";
  let result = 0;
  for (let i = 0; i < newArr.length; i++) {
    hide = newArr[i];
    if (hide === cat) result = result + 1;
  }
  return result;
}
