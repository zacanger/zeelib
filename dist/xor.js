"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Simple xor
 * @example
 * xor(1, 1) // => false
 * xor(1, !1) // => true
 */

var xor = function xor(a, b) {
  return !a !== !b;
};

exports.default = xor;