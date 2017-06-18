'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clamp = function clamp(l) {
  return function (h) {
    return function (x) {
      console.error('`clamp is deprecated`');
      return x > h ? h : x < l ? l : x;
    };
  };
};

exports.default = clamp;