'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Remove all newlines from string
 */

var removeNewlines = function removeNewlines(str /*: string*/) /*: string*/ {
  return str.replace(/(\r\n|\n|\r)/gm, '');
};

exports.default = removeNewlines;