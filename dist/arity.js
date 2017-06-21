"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the arity of f
 * @example
 * const addFour = (a, b, c, d) => a + b + c + d
 * arity(addFour) // => 4
 */

var arity = function arity(f /*: (any) => any*/) /*: number*/ {
  return f.length;
};

exports.default = arity;