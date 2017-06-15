"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the greater of two numbers
 */

var greater = function greater(a /*: number*/, b /*: number*/) /*: number*/ {
  return a > b ? a : b;
};

exports.default = greater;