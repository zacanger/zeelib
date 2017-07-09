"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var slice = function slice(arr, from, to) {
  return [].slice.call(arr, from, to || 1);
};

exports.default = slice;