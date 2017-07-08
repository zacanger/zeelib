'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if the value is a function
 * @example
 * const noop = () => {}
 * isFunction(2) // => false
 * isFunction(noop) // => true
 */

var isFunction = function isFunction(v) {
  return typeof v === 'function';
};

exports.default = isFunction;