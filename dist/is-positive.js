"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if number is positive
 * @example
 * isPositive(1) // => true
 */

var isPositive = function isPositive(a /*: number*/) /*: bool*/ {
  return +a === a && a > 0;
};

exports.default = isPositive;