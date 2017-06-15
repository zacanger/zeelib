"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if first param is less than or equal to second param
 */

var lte = function lte(a /*: number*/, b /*: number*/) /*: bool*/ {
  return a <= b;
};

exports.default = lte;