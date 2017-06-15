"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Applies f to first two items of list,
 * then to next, etc.
 */

var foldl1 = function foldl1(f /*: () => any*/, a /*: any[]*/) /*: any*/ {
  var s = a[0];
  for (var i = 1; i < a.length; i++) {
    s = f(s, a[i]);
  }
  return s;
};

exports.default = foldl1;