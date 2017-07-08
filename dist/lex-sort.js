"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Lex sort
 * @example
 * lexSort('asdf', 'asdf') // => 0
 * 'asdfghjkl'.split('').sort(lexSort).join('') // => 'adfghjls'
 */

var lexSort = function lexSort(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
};

exports.default = lexSort;