const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr) || !(arr instanceof Array)) {throw new Error('\'arr\' parameter must be an instance of the Array!');}

  let arr_new = arr.slice();
  console.log(arr_new)
  for (let i = 0; i < arr_new.length; i++) {
    switch (arr_new[i]) {
      case '--discard-next':
        if (i != arr_new.length - 1) { arr_new.splice(i, 2); i--; }
        else arr_new.splice(i, 1)
        break;
      case '--discard-prev':
        if (arr[i] == '--discard-next') { arr_new.splice(i, 1); break; }
        if (i != 0) arr_new.splice(i - 1, 2);
        else arr_new.splice(i, 1);
        break;
      case '--double-next':
        if (i != arr_new.length - 1) arr_new.splice(i, 1, arr_new[i + 1]);
        else arr_new.splice(i, 1)
        break;
      case '--double-prev':
        if (arr[i] == '--discard-next') { arr_new.splice(i, 1); break; }
        if (i != 0) arr_new.splice(i, 1, arr_new[i - 1]);
        else arr_new.splice(i, 1);
        break;
    }

  }
  return arr_new;
}

module.exports = {
  transform
};