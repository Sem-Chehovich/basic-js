import { NotImplementedError } from '../extensions/index.js';

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
 export default function getDNSStats( domains ) {
  const x = {};
  let acc;
  for (let i = 0; i < domains.length; i++) {
    acc = domains[i].split('.').reverse();
    acc[0] = '.'.concat(acc[0]);
    for (let j = 0; j < acc.length; j++) {
      if (acc[j + 1]) {
        acc[j + 1] = acc[j].concat('.', acc[j + 1]);
      }
      if (Object.prototype.hasOwnProperty.call(x, (acc[j]))) {
        x[acc[j]] += 1;
      } else {
        x[acc[j]] = 1;
      }
    }
  }
  return x;
}
