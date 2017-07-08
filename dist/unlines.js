'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Join an array with lines
 * @example
 * unlines([ 'foo', 'bar' ]) // => 'foo\nbar'
 */

var unlines = function unlines(arr) {
  return arr.join('\n');
};

exports.default = unlines;