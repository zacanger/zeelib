'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Remove non-numeric chars from string
 * @example
 * removeNonNumeric('asdf22\n!') // => '22'
 */

var removeNonNumeric = function removeNonNumeric(str) {
  return str.replace(/[^0-9-.]/g, '');
};

exports.default = removeNonNumeric;