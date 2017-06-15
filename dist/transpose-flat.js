"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Transpose a flat matrix like [1,2,3,4,5,6,7,8,9]
 */

var transposeFlat = function transposeFlat(matr /*: any[]*/) /*: any[]*/ {
  var l /*: number*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.sqrt(matr.length) | 0;
  return matr.map(function (c, i) {
    return matr[i % l * l + i / l | 0];
  });
};

exports.default = transposeFlat;