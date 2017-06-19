"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the greater of two numbers
 * @example
 * greater(1, 2) // => 2
 */

var greater = function greater(a /*: number*/, b /*: number*/) /*: number*/ {
  return a > b ? a : b;
};

exports.default = greater;