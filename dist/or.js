"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var or = function or(a) {
  var r = false;
  a.forEach(function (el) {
    if (el === true) {
      r = true;
    }
  });
  return r;
};

exports.default = or;