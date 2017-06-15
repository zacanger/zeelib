"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Transpose a 2-dimensional matrix like [[1,2,3],[4,5,6],[7,8,9]]
 */

var transpose = function transpose(matr /*: any[]*/) /*: any[]*/ {
  return matr.map(function (r, ri) {
    return r.map(function (c, ci) {
      return matr[ci][ri];
    });
  });
};

exports.default = transpose;