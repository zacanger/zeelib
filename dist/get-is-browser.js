'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if code is in browser
 * @example
 * getIsBrowser()
 */

var getIsBrowser = function getIsBrowser() /*: bool*/ {
  return !!(typeof window !== 'undefined' && typeof process === 'undefined');
};

exports.default = getIsBrowser;