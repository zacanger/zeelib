'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
// @flow

/**
 * Returns only alphanumeric characters
 */

var alphaNumericOnly = function alphaNumericOnly(str /*: string*/) /*: string*/ {
  return str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
};

exports.default = alphaNumericOnly;