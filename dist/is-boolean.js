'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if the value is a boolean
 * @example
 * isBoolean(true) // => true
 */

var isBoolean = function isBoolean(v) {
  return typeof v === 'boolean';
};

exports.default = isBoolean;