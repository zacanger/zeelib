"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Diff two arrays
 * @example
 * diff([ 1, 2, 3 ], [ 2, 3 ]) // => [ 1 ]
 */

var diff = function diff(a /*: any[]*/, b /*: ?any[]*/) /*: any[]*/ {
  var arr = [];
  var len = a.length;

  if (!b) {
    return a;
  }

  while (len--) {
    if (b.indexOf(a[len]) === -1) {
      arr.unshift(a[len]);
    }
  }

  return arr;
};

exports.default = diff;