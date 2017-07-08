'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Remove non-ascii chars from string
 * @example
 * removeNonAscii('asdf!!\n\r\t\ns') // => 'asdf!!s'
 */

var removeNonAscii = function removeNonAscii(str) {
  return str.replace(/[^\x20-\x7E]/g, '');
};

exports.default = removeNonAscii;