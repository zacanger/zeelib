"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes the last n items of array
 */

var takeLast = function takeLast(num /*: number*/, arr /*: any[]*/) /*: any[]*/ {
  arr = arr.reverse();
  var alen = arr.length;
  if (num > alen) return arr;
  var a1 = [];
  for (var i = 0; i < num && i < alen; i++) {
    a1.push(arr[i]);
  }
  return a1.reverse();
};

exports.default = takeLast;