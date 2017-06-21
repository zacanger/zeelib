"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the number is even
 * @example
 * isEven(2) // => true
 */

var isEven = function isEven(n /*: number*/) /*: bool*/ {
  return (n & 1) === 0;
};

exports.default = isEven;