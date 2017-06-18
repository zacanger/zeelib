'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Trims a string to just abbreved caps
 * @param {string} str
 * @returns {string}
 * @example
 * abbrev('Zacary Erik Anger') // => 'ZEA'
 */

var abbrev = function abbrev(str) {
  return str.match(/\b([A-Z])/g) ? str.match(/\b([A-Z])/g).join('') : str;
};

exports.default = abbrev;