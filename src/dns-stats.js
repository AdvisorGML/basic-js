const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  for (i = 0; i < domains.length; i++) {
    console.log(domains[i]);
    let arr = domains[i].split('.');
    arr.reverse();
    for (j = 0; j < arr.length; j++) {
      domain = '.' + arr.slice(0, j + 1).join('.');
      if (domain in res) res[domain]++
      else res[domain] = 1
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};