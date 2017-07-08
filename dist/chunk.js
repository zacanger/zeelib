"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Splits an array into chunks
 * @example
 * chunk([1, 2, 3, 4 ], 2) // => [ [ 1, 2 ], [ 3, 4 ] ]
 */

var chunk = function chunk(arr, n) {
  if (!arr.length || !n) return [];
  return [arr.slice(0, n)].concat(chunk(arr.slice(n), n));
};

exports.default = chunk;