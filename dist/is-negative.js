"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if the number is negative
 * @example
 * isNegative(-1) // => true
 */

var isNegative = function isNegative(a) {
  return +a === a && a < 0;
};

exports.default = isNegative;