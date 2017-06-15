'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `console.clear` for Node and browser
 */

var consoleClear = function consoleClear() /*: void*/ {
  return typeof console.clear === 'function' ? console.clear() : console.log('\x1Bc');
};

exports.default = consoleClear;