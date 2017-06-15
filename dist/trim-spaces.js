'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Trim spaces from string
 */

var trimSpaces = function trimSpaces(str /*: string*/) /*: string*/ {
  return typeof str === 'string' ? str.replace(/\s/g, '') : str;
};

exports.default = trimSpaces;