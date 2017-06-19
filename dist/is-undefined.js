"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if value is undefined
 * @example
 * isUndefined(undefined) // => true
 */

var isUndefined = function isUndefined(v /*: any*/) /*: bool*/ {
  return v === undefined;
};

exports.default = isUndefined;