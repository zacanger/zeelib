'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove non-numeric chars from string
 * @example
 * removeNonNumeric('asdf22\n!') // => '22'
 */

var removeNonNumeric = function removeNonNumeric(str /*: string*/) /*: string*/ {
  return str.replace(/[^0-9-.]/g, '');
};

exports.default = removeNonNumeric;