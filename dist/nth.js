"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns nth element of array
 * @example
 * nth(2, [ 1, 2 3 ]) // => 3
 */

var nth = function nth(n, arr) {
  return arr[n];
};

exports.default = nth;