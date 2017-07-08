"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Flips order of received arguments and calls f.
 * @example
 * const minus = (a) => (b) => a - b
 * minus(2)(1) // => 1
 * flip(minus)(2)(1) // => -1
 */

var flip = function flip(f) {
  return function (a) {
    return function (b) {
      return f(b)(a);
    };
  };
};

exports.default = flip;