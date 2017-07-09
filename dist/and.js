"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var and = function and(a) {
  var r = true;
  a.forEach(function (el) {
    if (el === false) {
      r = false;
    }
  });
  return r;
};

exports.default = and;