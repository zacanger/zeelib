'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Trim spaces from string
 * @example
 * trimSpaces(' asdf asdf ') // => 'asdfasdf'
 */

var trimSpaces = function trimSpaces(str) {
  return typeof str === 'string' ? str.replace(/\s/g, '') : str;
};

exports.default = trimSpaces;