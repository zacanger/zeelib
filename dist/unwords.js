'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Join an array with spaces
 * @example
 * unwords([ 'foo', bar ]) // => 'foo bar'
 */

var unwords = function unwords(arr /*: string[]*/) /*: string*/ {
  return arr.join(' ');
};

exports.default = unwords;