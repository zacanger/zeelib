"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var constant = function constant(a) {
  return function (_) {
    return a;
  };
};

exports.default = constant;