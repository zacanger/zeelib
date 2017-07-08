'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if code is in browser
 * @example
 * isBrowser()
 */

var isBrowser = function isBrowser() {
  return !!(typeof window !== 'undefined' && typeof process === 'undefined');
};

exports.default = isBrowser;