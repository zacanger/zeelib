"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `[].slice` util
 * @example
 * slice([ 1, 2, 3 ], 1, 2) // => [ 2 ]
 */

var slice = function slice(arr /*: any[]*/, from /*: number*/, to /*: ?number*/) /*: any[]*/ {
  return [].slice.call(arr, from, to || 1);
};

exports.default = slice;