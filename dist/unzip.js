"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


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