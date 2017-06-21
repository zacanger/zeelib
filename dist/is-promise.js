'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if value is a promise
 * @example
 * isPromise(Promise.resolve())
 */

var isPromise = function isPromise(a /*: any*/) /*: bool*/ {
  return a && typeof a.then === 'function';
};

exports.default = isPromise;