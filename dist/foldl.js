"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Applies f to second arg and first item of list,
 * then to next item, etc.
 */

var foldl = function foldl(f /*: () => any*/, s /*: any*/, a /*: any[]*/) /*: any*/ {
  a.forEach(function (el) {
    s = f(s, el);
  });
  return s;
};

exports.default = foldl;