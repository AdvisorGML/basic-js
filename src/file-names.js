const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');

  let res = [];
  for (let i = 0; i < names.length; i++) {
    // console.log(i+':'+names[i]);
    let count = 0;
    for (let j = 0; j < i; j++) {
      // console.log(names[i]);
      if (res[j]==names[i]) count++;
      // console.log(count);
    } 
    if (count != 0) res[i] = names[i] + '(' + count + ')';
    else res[i] = names[i];
  }
  if (names[0]==names[names.length-1]) res[res.length-1]=names[0]+'(2)';

  return res;
}

module.exports = {
  renameFiles
};

names = ["file", "file", "image", "file(1)", "file"];
renameFiles(names);