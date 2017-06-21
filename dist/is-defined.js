"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the value is defined
 * @example
 * isDefined(null) // => true
 */

var isDefined = function isDefined(v /*: any*/) /*: bool*/ {
  return v !== undefined;
};

exports.default = isDefined;