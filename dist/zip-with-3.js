"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Takes a function and three lists
 * Returns an array of elements calculated by
 * calling the function on the elements of
 * each list at the same position
 * @param {function} fn
 * @param {array} xs
 * @param {array} ys
 * @param {array} zs
 * @returns {array}
 * @example
 * zipWith3(increment, [ 1, 1 ], [ 1, 1 ], [ 1, 1 ]) // => [ 2, 2, 2 ]
 */

var zipWith3 = function zipWith3(fn, xs, ys, zs) {
  var res = [];
  var yslen = ys.length;
  var zslen = zs.length;
  for (var i in xs) {
    if (i >= yslen || i >= zslen) {
      return res;
    }
    res.push(fn(xs[i], ys[i], zs[i]));
  }
  return res;
};

exports.default = zipWith3;