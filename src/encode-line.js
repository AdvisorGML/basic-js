const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = []
  let count = 0, i = 0
  while (i < str.length) {
    let chr = str[i]
    count = 1
    while (i < str.length - 1 && chr == str[i + 1]) {
      count++
      i++
    }
    if(count==1) count='';
    arr.push(count +''+ chr)
    i++
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};

// console.log(encodeLine('aabbbc'));
