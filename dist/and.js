"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var and = function and(a) {
  return a.every(function (e) {
    return e !== false;
  });
};

exports.default = and;