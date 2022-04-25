const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  if (typeof str === 'object') str=String(str);
  if (str === null) str = 'null';
  str = str.toString();
  if (typeof options.addition === 'object') options.addition=String(options.addition);
  if (!("addition" in options)) options.addition = '';
  if (options.addition === null) options.addition = 'null';
  options.addition = options.addition.toString();
  if (!("repeatTimes" in options)) options.repeatTimes = 1;
  if (!("additionRepeatTimes" in options)) options.additionRepeatTimes = 1;
  if (!("separator" in options)) options.separator = '+';
  if (!("additionSeparator" in options)) options.additionSeparator = '|';

  let res = '';
  let st = '';
  for (let j = 0; j < options.additionRepeatTimes; j++) {
    st = st + options.addition + options.additionSeparator
  }
  st = st.slice(0, -options.additionSeparator.length);

  for (let i = 0; i < options.repeatTimes; i++) {
    res = res + str + st + options.separator;
  }
  res = res.slice(0, -options.separator.length);
  // console.log(res);
  return res;
}

module.exports = {
  repeater
};

// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };
// repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion });