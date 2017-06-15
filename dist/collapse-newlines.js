'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Collapses multiple newlines to two
 */

var collapseNewlines = function collapseNewlines(str /*: string*/) /*: string*/ {
  return str.replace(/\n\s*\n/g, '\n\n');
};

exports.default = collapseNewlines;