"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var flip = function flip(f) {
  return function (a) {
    return function (b) {
      return f(b)(a);
    };
  };
};

exports.default = flip;