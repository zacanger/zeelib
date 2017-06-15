"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Averages a list of numbers
 */

var average = function average(xs /*: number[]*/) /*: number*/ {
  var t = xs.reduce(function (a, b) {
    return a + b;
  }, 0);
  return t / xs.length;
};

exports.default = average;