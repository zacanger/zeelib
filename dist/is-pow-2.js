"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if number is a power of two
 * @example
 * isPow2(16) // => true
 */

var isPow2 = function isPow2(n /*: number*/) /*: bool*/ {
  return 1 << n.toString(2).length - 1 === n;
};

exports.default = isPow2;