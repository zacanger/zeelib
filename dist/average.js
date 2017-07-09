"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var average = function average(xs) {
  var t = xs.reduce(function (a, b) {
    return a + b;
  }, 0);
  return t / xs.length;
};

exports.default = average;