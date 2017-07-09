"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var pairWith = function pairWith(f, a, b) {
  return [f(a), f(b)];
};

exports.default = pairWith;