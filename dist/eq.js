"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var eq = function eq(a, b) {
  return a === b ? true : a === undefined || b === undefined ? false : JSON.stringify(a) === JSON.stringify(b);
};

exports.default = eq;