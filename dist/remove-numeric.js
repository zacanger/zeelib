'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove numeric chars from string
 * @example
 * removeNumeric('123abc') // => 'abc'
 */

var removeNumeric = function removeNumeric(str /*: string*/) /*: string*/ {
  return str.replace(/[0-9]/g, '');
};

exports.default = removeNumeric;