"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns the lesser of two numbers
 * @example
 * lesser(1, 2) // => 1
 */

var lesser = function lesser(a, b) {
  return a < b ? a : b;
};

exports.default = lesser;