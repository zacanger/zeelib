"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if first param is greater than or equal to second param
 * @example
 * gte(2, 2) // => true
 * gte(2, 1) // => true
 * gte(2, 3) // => false
 */

var gte = function gte(a, b) {
  return a >= b;
};

exports.default = gte;