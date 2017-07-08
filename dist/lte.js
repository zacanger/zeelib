"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if first param is less than or equal to second param
 * @example
 * lte(2, 1) // => false
 * lte(1, 1) // => true
 */

var lte = function lte(a, b) {
  return a <= b;
};

exports.default = lte;