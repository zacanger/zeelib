"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Flips order of received arguments and calls f.
 * @example
 * const minus = (a) => (b) => a - b
 * minus(2)(1) // => 1
 * flip(minus)(2)(1) // => -1
 */

var flip = function flip(f /*: () => any*/) /*: any*/ {
  return function (a /*: any*/) {
    return function (b /*: any*/) {
      return f(b)(a);
    };
  };
};

exports.default = flip;