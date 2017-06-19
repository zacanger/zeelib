"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Simple xor
 * @example
 * xor(1, 1) // => false
 * xor(1, !1) // => true
 */

var xor = function xor(a /*: any*/, b /*: any*/) /*: bool*/ {
  return !a !== !b;
};

exports.default = xor;