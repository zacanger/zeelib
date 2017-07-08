'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Collapses multiple newlines to two
 * @example
 * collapseNewlines('\n\n\n\n') // => '\n\n'
 */

var collapseNewlines = function collapseNewlines(str) {
  return str.replace(/\n\s*\n/g, '\n\n');
};

exports.default = collapseNewlines;