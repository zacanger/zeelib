'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Remove non-alpha chars from string
 * @example
 * removeNonAlpha('asdf 22 a') // => 'asdf  a'
 */

var removeNonAlpha = function removeNonAlpha(str) {
  return str.replace(/[^A-Za-z ]+/g, '');
};

exports.default = removeNonAlpha;