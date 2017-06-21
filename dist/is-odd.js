"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the number is odd
 * @example
 * isOdd(1) // => true
 */

var isOdd = function isOdd(n /*: number*/) /*: bool*/ {
  return (n & 1) !== 0;
};

exports.default = isOdd;