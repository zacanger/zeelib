'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove non-ascii chars from string
 */

var removeNonAscii = function removeNonAscii(str /*: string*/) /*: string*/ {
  return str.replace(/[^\x20-\x7E]/g, '');
};

exports.default = removeNonAscii;