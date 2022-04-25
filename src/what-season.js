const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  let datetime = new Date(date);
  // console.log(date +' '+Date.parse(date)+' '+ datetime instanceof Date + ' ' + arguments.length);
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
}

  // if(datetime.getMonth) console.log('ZZZZZZZZZZ');
  if (date === '' || typeof date === "undefined") return 'Unable to determine the time of year!';
  if (isNaN(Date.parse(date)) == true) throw new Error('Invalid date!');

  //  console.log(date.getTime());
  
  let month = date.getMonth();

  if ((month == 11) || (month <= 1)) return 'winter';
  if ((month >= 2) && (month <= 4)) return 'spring';
  if ((month >= 5) && (month <= 7)) return 'summer';
  if ((month >= 8) && (month <= 10)) return 'fall';
return 'Invalid date!';
}

module.exports = {
  getSeason
};

// const springDate = new Date(2025, 1, 22, 23, 45, 11, 500);
//  const springDate = new Date(2134, 02, 17, 11, 27, 4, 321);
// const springDate = new Date(2012, 5, 13, 23, 45, 11, 500);
//  const springDate = new Date(2019, 8, 22, 3, 0, 11, 500);
// console.log(getSeason('hasdbasdc'));
// console.log(getSeason());
