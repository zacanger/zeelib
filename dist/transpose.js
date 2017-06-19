'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var transpose = function transpose(matr /*: any[]*/) /*: any[]*/ {
  console.error('`transpose` is deprecated.');
  return matr.map(function (r, ri) {
    return r.map(function (c, ci) {
      return matr[ci][ri];
    });
  });
};

exports.default = transpose;