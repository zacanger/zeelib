"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Applys f to arg
 * @example
 * apply(lessThanThree, 1) // => true
 */

var apply = function apply(f /*: (any) => any*/, x /*: any*/) /*: any*/ {
  return f(x);
};

exports.default = apply;