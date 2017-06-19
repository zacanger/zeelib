"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns the lesser of two numbers
 * @example
 * lesser(1, 2) // => 1
 */

var lesser = function lesser(a /*: number*/, b /*: number*/) /*: number*/ {
  return a < b ? a : b;
};

exports.default = lesser;