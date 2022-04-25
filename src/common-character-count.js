const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let count = 0;
  for (i = 0; i < arr1.length; i++) {
    let el = arr2.indexOf(arr1[i]);
    if (el != -1) { count++; arr2.splice(el, 1); }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
