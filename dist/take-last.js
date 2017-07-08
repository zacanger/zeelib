"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Takes the last n items of array
 * @example
 * takeLast(2, [ 1, 2, 3, 4 ]) // => [ 3, 4 ]
 */

var takeLast = function takeLast(num, arr) {
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