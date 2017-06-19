'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if value is a string
 * @example
 * isString('a') // => true
 */

var isString = function isString(v /*: any*/) /*: bool*/ {
  return typeof v === 'string';
};

exports.default = isString;