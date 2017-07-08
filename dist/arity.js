"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Get the arity of f
 * @example
 * const addFour = (a, b, c, d) => a + b + c + d
 * arity(addFour) // => 4
 */

var arity = function arity(f) {
  return f.length;
};

exports.default = arity;