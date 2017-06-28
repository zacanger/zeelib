"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Applies f with second arg and last item of list,
 * then again with next-last item, etc.
 * @example
 * foldr(increment, 1, [ 1, 1, 1 ]) // => 4
 */

var foldr = function foldr(f /*: () => any*/, s /*: any*/, a /*: any[]*/) /*: any*/ {
  for (var i = a.length - 1; i >= 0; i--) {
    s = f(s, a[i]);
  }
  return s;
};

exports.default = foldr;