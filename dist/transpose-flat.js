'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var transposeFlat = function transposeFlat(matr /*: any[]*/) /*: any[]*/ {
  var l /*: number*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.sqrt(matr.length) | 0;

  console.error('`transposeFlat` is deprecated.');
  return matr.map(function (c, i) {
    return matr[i % l * l + i / l | 0];
  });
};

exports.default = transposeFlat;