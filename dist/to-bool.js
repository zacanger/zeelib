"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get truthiness
 * @example
 * toBool(1) // => true
 */

var toBool = function toBool(val /*: any*/) /*: bool*/ {
  return !!val;
};

exports.default = toBool;