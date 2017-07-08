"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Takes a list of pairs
 * and returns two lists of first and second elements
 * @example
 * unzip([ [ 1, 1 ], [ 2, 2 ]]) // => [ [ 1, 2 ], [ 1, 2 ] ]
 */

var unzip = function unzip(xs) {
  var a2 = [];
  var a3 = [];
  xs.forEach(function (_, i) {
    a2.push(xs[i][0]);
    a3.push(xs[i][1]);
  });
  return [a2, a3];
};

exports.default = unzip;