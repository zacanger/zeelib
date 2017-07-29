"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var any = function any(f, a) {
  var r = false;
  a.forEach(function (e) {
    if (f(e) === true) {
      r = true;
    }
  });
  return r;
};

exports.default = any;