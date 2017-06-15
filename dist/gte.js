"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if first param is greater than or equal to second param
 */

var gte = function gte(a /*: number*/, b /*: number*/) /*: bool*/ {
  return a >= b;
};

exports.default = gte;