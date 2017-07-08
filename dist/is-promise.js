'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if value is a promise
 * @example
 * isPromise(Promise.resolve())
 */

var isPromise = function isPromise(a) {
  return a && typeof a.then === 'function';
};

exports.default = isPromise;