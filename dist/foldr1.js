"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var foldr1 = function foldr1(f, a) {
  var s = a[a.length - 1];
  for (var i = a.length - 2; i >= 0; i--) {
    s = f(s, a[i]);
  }
  return s;
};

exports.default = foldr1;