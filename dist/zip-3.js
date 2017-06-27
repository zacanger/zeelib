"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Makes a list of tuples. Each list
 * is made of the elements of each list param's
 * elements at the same position
 * @param {array} xs
 * @param {array} ys
 * @param {array} zs
 * @returns {array}
 * @example
 * zip3([ 1, 2 ], [ 3, 4 ], [ 5, 6 ]) // => [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
 */

var zip3 = function zip3(xs, ys, zs) {
  var res = [];
  var yslen = ys.length;
  var zslen = zs.length;
  for (var i in xs) {
    if (i >= yslen || i >= zslen) {
      return res;
    }
    res.push([xs[i], ys[i], zs[i]]);
  }
  return res;
};

exports.default = zip3;