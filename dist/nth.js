"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns nth element of array
 * @example
 * nth(2, [ 1, 2 3 ]) // => 3
 */

var nth = function nth(n /*: number*/, arr /*: any[]*/) /*: any*/ {
  return arr[n];
};

exports.default = nth;