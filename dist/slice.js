"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `[].slice` util
 */

var slice = function slice(arr /*: any[]*/, from /*: number*/, to /*: ?number*/) /*: any[]*/ {
  return [].slice.call(arr, from, to || 1);
};

exports.default = slice;