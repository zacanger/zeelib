"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if an array has any
 * duplicate elements
 * @example
 * hasDuplicate([ 1, 1, 2 ]) // => true
 */

var hasDuplicate = function hasDuplicate(arr /*: any[]*/) /*: bool*/ {
  return arr.some(function (v, i, s) {
    return s.indexOf(v) !== i;
  });
};

exports.default = hasDuplicate;