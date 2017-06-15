'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Roughly minify a string
 */

var minifyString = function minifyString(str /*: string*/) /*: string*/ {
  console.error('`minifyString` is depreacted. Please use `collapseWhitespace` instead.');
  return str.replace(/\n/g, '').replace(/\s\s+/g, ' ');
};

exports.default = minifyString;