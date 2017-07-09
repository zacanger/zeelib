"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


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