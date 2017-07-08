"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Applies f to second arg and first item of list,
 * then to next item, etc.
 * @example
 * foldl(increment, 1, [ 1, 1, 1 ]) // => 4
 */

var foldl = function foldl(f, s, a) {
  a.forEach(function (el) {
    s = f(s, el);
  });
  return s;
};

exports.default = foldl;