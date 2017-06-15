'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove all whitespace from string
 */

var removeWhitespace = function removeWhitespace(str /*: string*/) /*: string*/ {
  return str.replace(/^\s+|\s+$/, '');
};

exports.default = removeWhitespace;