'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * nco
 * @example
 * nco(null, 1) // => 1
 * nco(1, 2) // => 1
 */

var nco = function nco(variable, defaultValue) {
  return variable === null || typeof variable === 'undefined' ? defaultValue : variable;
};

exports.default = nco;