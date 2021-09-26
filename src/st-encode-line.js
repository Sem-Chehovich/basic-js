import { NotImplementedError } from '../extensions/index.js';

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
 export default function encodeLine( str ) {
  let x = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      x++;
    }
    if (str[i] !== str[i + 1]) {
      result = result.concat(`${x === 1 ? '' : x}${str[i]}`);
      x = 1;
    }
  }
  return result;
}
