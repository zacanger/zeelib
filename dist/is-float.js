"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if the number is a float
 * @example
 * isFloat(2) // => false
 * isFloat(2.2) // => true
 */

var isFloat = function isFloat(n) {
  return (n | 0) !== n;
};

exports.default = isFloat;