"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var any = function any(f, a) {
  for (var i in a) {
    if (f(a[i]) === true) {
      return true;
    }
  }
  return false;
};

exports.default = any;