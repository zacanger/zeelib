"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Similar to `unzip`, but takes a list of triples
 * and returns three lists
 * @example
 * unzip3([ [ 1, 1, 1 ], [ 2, 2, 2 ] ]) // => [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
 */

var unzip3 = function unzip3(xs) {
  var a2 = [];
  var a3 = [];
  var a4 = [];
  xs.forEach(function (_, i) {
    a2.push(xs[i][0]);
    a3.push(xs[i][1]);
    a4.push(xs[i][2]);
  });
  return [a2, a3, a4];
};

exports.default = unzip3;