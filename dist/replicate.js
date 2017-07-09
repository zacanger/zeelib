'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var replicate = function replicate(n, p) {
  return Array(n).fill().map(function (_, i) {
    return typeof p === 'function' ? p(n, i) : p;
  });
};

exports.default = replicate;