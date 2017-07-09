"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var tap = function tap(msg) {
  return function (a) {
    console.log(msg, a);
    return a;
  };
};

exports.default = tap;