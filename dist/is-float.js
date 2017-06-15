"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the number is a float
 */

var isFloat = function isFloat(n /*: number*/) /*: bool*/ {
  return (n | 0) !== n;
};

exports.default = isFloat;