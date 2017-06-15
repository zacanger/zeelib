"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Simple xor
 */

var xor = function xor(a /*: any*/, b /*: any*/) /*: bool*/ {
  return !a !== !b;
};

exports.default = xor;