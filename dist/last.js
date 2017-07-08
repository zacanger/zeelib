"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns the last element of the array
 * @example
 * last([ 1, 2, 3 ]) // => 3
 */

var last = function last(arr) {
  return arr[arr.length - 1];
};

exports.default = last;