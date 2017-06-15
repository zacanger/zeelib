'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Reverse digits with correct sign handling
 * @param {number} num
 * @returns {number}
 * @example
 * reverseDigits(-123) // -321
 */

var reverseDigits = function reverseDigits(num) {
  return Math.sign(num) * ('' + Math.abs(num)).split('').reverse().join('') || 0;
};

exports.default = reverseDigits;