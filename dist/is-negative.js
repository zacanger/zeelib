"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var isNegative = function isNegative(a) {
  return +a === a && a < 0;
};

exports.default = isNegative;