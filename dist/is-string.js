'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if value is a string
 * @example
 * isString('a') // => true
 */

var isString = function isString(v) {
  return typeof v === 'string';
};

exports.default = isString;