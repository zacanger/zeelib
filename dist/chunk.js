"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Splits an array into chunks
 */

var chunk = function chunk(arr /*: any[]*/, n /*: number*/) /*: any[]*/ {
  if (!arr.length || !n) return [];
  return [arr.slice(0, n)].concat(chunk(arr.slice(n), n));
};

exports.default = chunk;