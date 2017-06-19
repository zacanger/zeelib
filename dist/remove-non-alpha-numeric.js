'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove non-alphanumeric chars from string
 * @example
 * removeNonAlphaNumeric('asdlfkjsdf92r 2\n239wjefs ff!!sdf') // => 'asdlfkjsdf92r 2239wjefs ffsdf'
 */

var removeNonAlphaNumeric = function removeNonAlphaNumeric(str /*: string*/) /*: string*/ {
  return str.replace(/[^A-Za-z0-9 ]+/g, '');
};

exports.default = removeNonAlphaNumeric;