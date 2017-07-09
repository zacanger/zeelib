"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var foldl = function foldl(f, s, a) {
  a.forEach(function (el) {
    s = f(s, el);
  });
  return s;
};

exports.default = foldl;