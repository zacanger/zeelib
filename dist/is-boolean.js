'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the value is a boolean
 * @example
 * isBoolean(true) // => true
 */

var isBoolean = function isBoolean(v /*: any*/) /*: bool*/ {
  return typeof v === 'boolean';
};

exports.default = isBoolean;