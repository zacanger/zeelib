"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var or = function or(a) {
  return a.some(function (e) {
    return e === true;
  });
};

exports.default = or;