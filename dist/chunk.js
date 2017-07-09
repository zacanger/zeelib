"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var chunk = function chunk(arr, n) {
  if (!arr.length || !n) return [];
  return [arr.slice(0, n)].concat(chunk(arr.slice(n), n));
};

exports.default = chunk;