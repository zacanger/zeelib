"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Uncurry a function
 * @example
 * const addCurried = (a) => (b) => a + b
 * const add = uncurry(addCurried)
 * add(1, 2) // => 3
 */

var uncurry = function uncurry(f /*: () => any*/) {
  return function (a /*: any*/, b /*: any*/) /*: any*/ {
    return f(a)(b);
  };
};

exports.default = uncurry;