'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Generates an array of the length of the first param,
 * filled with the second param, calling the second param
 * if it's a function
 */

var generateSequence = function generateSequence(n /*: number*/, p /*: any*/) /*: any[]*/ {
  return Array(n).fill().map(function (_, i) {
    return typeof p === 'function' ? p(n, i) : p;
  });
};

exports.default = generateSequence;