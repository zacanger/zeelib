"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isPositive = function isPositive(a) {
  return +a === a && a > 0;
};

exports.default = isPositive;