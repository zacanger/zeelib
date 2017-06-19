'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Trim spaces from string
 * @example
 * trimSpaces(' asdf asdf ') // => 'asdfasdf'
 */

var trimSpaces = function trimSpaces(str /*: string*/) /*: string*/ {
  return typeof str === 'string' ? str.replace(/\s/g, '') : str;
};

exports.default = trimSpaces;