'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var generateSequence = function generateSequence(n /*: number*/, p /*: any*/) /*: any[]*/ {
  console.error('`generateSequence` is deprecated. Use `replicate`.');
  return Array(n).fill().map(function (_, i) {
    return typeof p === 'function' ? p(n, i) : p;
  });
};

exports.default = generateSequence;