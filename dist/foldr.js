"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var foldr = function foldr(f, s, a) {
  for (var i = a.length - 1; i >= 0; i--) {
    s = f(s, a[i]);
  }
  return s;
};

exports.default = foldr;