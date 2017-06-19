"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if first param is greater than second param
 * @example
 * gt(2, 1) // => true
 * gt(1, 2) // => false
 */

var gt = function gt(a /*: number*/, b /*: number*/) /*: bool*/ {
  return a > b;
};

exports.default = gt;