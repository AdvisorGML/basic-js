const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let res = '';
  let str = n.toString();
  for (i = 0; i < str.length - 1; i++) {
    if (str[i] < str[i + 1]) {
      // res = str.substring(0,i)+str.substring(i+1);
      return Number(str.substring(0, i) + str.substring(i + 1));
    }
  }
  // res = str.substring(0,str.length-1);
  return Number(str.substring(0, str.length - 1));
}

module.exports = {
  deleteDigit
};