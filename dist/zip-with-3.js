"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


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