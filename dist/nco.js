'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * nco
 * cred: gh:artificerentertainment
 */

var nco = function nco(variable /*: any*/, defaultValue /*: any*/) /*: any*/ {
  return variable === null || typeof variable === 'undefined' ? defaultValue : variable;
};

exports.default = nco;