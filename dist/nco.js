'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * nco
 * cred: gh:artificerentertainment
 * @example
 * nco(null, 1) // => 1
 * nco(1, 2) // => 1
 */

var nco = function nco(variable /*: any*/, defaultValue /*: any*/) /*: any*/ {
  return variable === null || typeof variable === 'undefined' ? defaultValue : variable;
};

exports.default = nco;