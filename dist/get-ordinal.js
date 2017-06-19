'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Adds ordinal onto integer
 * Works up to 999
 * @example
 * getOrdinal(1) // => '1st'
 */

var getOrdinal = function getOrdinal(n /*: number*/) /*: string*/ {
  var s = ['th', 'st', 'nd', 'rd'];
  var v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

exports.default = getOrdinal;