"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the value is null
 * @example
 * isNull(null) // => true
 */

var isNull = function isNull(v /*: any*/) /*: bool*/ {
  return v === null;
};

exports.default = isNull;