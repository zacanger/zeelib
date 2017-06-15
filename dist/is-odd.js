"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the number is odd
 */

var isOdd = function isOdd(n /*: number*/) /*: bool*/ {
  return (n & 1) !== 0;
};

exports.default = isOdd;