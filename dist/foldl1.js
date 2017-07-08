"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Applies f to first two items of list,
 * then to next, etc.
 * @example
 * foldl1(increment, [ 1, 1, 1 ]) // => 3
 */

var foldl1 = function foldl1(f, a) {
  var s = a[0];
  for (var i = 1; i < a.length; i++) {
    s = f(s, a[i]);
  }
  return s;
};

exports.default = foldl1;