'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// compares params by val
var isObjectEqual = function isObjectEqual(a, b) {
  console.error('`isObjectEqual` is deprecated. Please use `eq` instead.');
  if (a === b) return true;
  return JSON.stringify(a) === JSON.stringify(b);
};

exports.default = isObjectEqual;