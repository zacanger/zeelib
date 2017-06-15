"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Like Haskell's `drop`
 */

var drop = function drop(n /*: number*/, arr /*: any[]*/) /*: any[]*/ {
  var alen = arr.length;
  if (n < 1) return arr;
  if (n > alen) return [];
  var res = [];
  for (var i = n; i < alen; i++) {
    res.push(arr[i]);
  }
  return res;
};

exports.default = drop;