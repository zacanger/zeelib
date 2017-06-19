'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Roughly minify a string
 */

var minifyString = function minifyString(str) {
  console.error('`minifyString` is depreacted. Please use `collapseWhitespace` instead.');
  return str.replace(/\n/g, '').replace(/\s\s+/g, ' ');
};

exports.default = minifyString;