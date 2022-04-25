const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  let res_matrix = matrix.slice();
  const higth = matrix.length,
        width = matrix[0].length;

  for (let i = 0; i < higth; i++) {
    let count = 0;
    for (let j = 0; j < width; j++) {

      if (matrix[i][j] === false) {
        let count = 0;
        for (k = i - 1; k <= i + 1; k++) {
          for (m = j - 1; m <= j + 1; m++) {
            if (k >= 0 && k < higth && m >= 0 && m < width) {
              if (matrix[k][m] === true) count++;
            }
            // console.log(i + ':' + j + ' ' + count);
          }
        }
        res_matrix[i][j] = count
      }
      // console.log(matrix[i][j]);
    }
  }
  for (let i = 0; i < higth; i++) {
    let count = 0;
    for (let j = 0; j < width; j++) {
      if (res_matrix[i][j] === true) res_matrix[i][j] = 1;
    }
  }
  // console.log(res_matrix);
  return res_matrix;
}

module.exports = {
  minesweeper
};

const matrix = [[true, false, false],
[false, true, false],
[false, false, false]];

minesweeper(matrix);