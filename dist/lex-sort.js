"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Lex sort
 */

var lexSort = function lexSort(a /*: string*/, b /*: string*/) /*: number*/ {
  return a === b ? 0 : a > b ? 1 : -1;
};

exports.default = lexSort;