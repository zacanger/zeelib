'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Trim hash from string
 * @example
 * trimHash('#foo') // => 'foo'
 */

var trimHash = function trimHash(str /*: string*/) /*: string*/ {
  return typeof str === 'string' ? str.replace('#', '') : str;
};

exports.default = trimHash;