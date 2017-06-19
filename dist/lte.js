"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if first param is less than or equal to second param
 * @example
 * lte(2, 1) // => false
 * lte(1, 1) // => true
 */

var lte = function lte(a /*: number*/, b /*: number*/) /*: bool*/ {
  return a <= b;
};

exports.default = lte;