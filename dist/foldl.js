"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Applies f to second arg and first item of list,
 * then to next item, etc.
 * @example
 * foldl(increment, 1, [ 1, 1, 1 ]) // => 4
 */

var foldl = function foldl(f /*: () => any*/, s /*: any*/, a /*: any[]*/) /*: any*/ {
  a.forEach(function (el) {
    s = f(s, el);
  });
  return s;
};

exports.default = foldl;