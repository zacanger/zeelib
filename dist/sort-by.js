"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var sortBy = function sortBy(f, xs) {
  return xs.sort(function (a, b) {
    return f(a) - f(b);
  });
};

exports.default = sortBy;