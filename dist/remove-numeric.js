'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Remove numeric chars from string
 * @example
 * removeNumeric('123abc') // => 'abc'
 */

var removeNumeric = function removeNumeric(str) {
  return str.replace(/[0-9]/g, '');
};

exports.default = removeNumeric;