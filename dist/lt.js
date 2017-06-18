"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if first param is less than second param
 * @example
 * lt(2, 1) // => false
 */

var lt = function lt(a /*: number*/, b /*: number*/) /*: bool*/ {
  return a < b;
};

exports.default = lt;