"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


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