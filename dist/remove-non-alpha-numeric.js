'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove non-alphanumeric chars from string
 */

var removeNonAlphaNumeric = function removeNonAlphaNumeric(str /*: string*/) /*: string*/ {
  return str.replace(/[^A-Za-z0-9 ]+/g, '');
};

exports.default = removeNonAlphaNumeric;