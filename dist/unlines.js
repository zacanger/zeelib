'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Join an array with lines
 * @example
 * unlines([ 'foo', 'bar' ]) // => 'foo\nbar'
 */

var unlines = function unlines(arr /*: string[]*/) /*: string*/ {
  return arr.join('\n');
};

exports.default = unlines;