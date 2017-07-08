"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns an array made by calling
 * f on a and b.
 * @example
 * pairWith(increment, 1, 1) // => [ 2, 2 ]
 */

var pairWith = function pairWith(f, a, b) {
  return [f(a), f(b)];
};

exports.default = pairWith;