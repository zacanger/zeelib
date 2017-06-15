"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns the last element of the array
 */

var last = function last(arr /*: any[]*/) /*: any*/ {
  return arr[arr.length - 1];
};

exports.default = last;