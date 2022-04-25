const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  depth = 1;
  calculateDepth(arr) {
    let isArray = false;
    for (let el of arr) {
      if (Array.isArray(el)) {
        isArray = true;
        break;
      }
    }
    if (isArray){ 
      return this.depth + this.calculateDepth(arr.flat());
    }
    return this.depth;
  }
}

module.exports = {
  DepthCalculator
};

// const depthCalc = new DepthCalculator();
// // depthCalc.calculateDepth([1, 2, 3, 4, 5]); // => 1
// // depthCalc.calculateDepth([1, 2, 3, [4, 5]]); // => 2
// depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]); // => 3