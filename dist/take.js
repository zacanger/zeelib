"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Like Haskell's `take`
 */

var take = function take(num /*: number*/, arr /*: any[]*/) /*: any[]*/ {
  var alen = arr.length;
  if (num > alen) return arr;
  var a1 = [];
  for (var i = 0; i < num && i < alen; i++) {
    a1.push(arr[i]);
  }
  return a1;
};

exports.default = take;