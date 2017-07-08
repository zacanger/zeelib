"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Like Haskell's `drop`
 * @example
 * drop(2, [ 1, 2, 3 ]) // => 3
 */

var drop = function drop(n, arr) {
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