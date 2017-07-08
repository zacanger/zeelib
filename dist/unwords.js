'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Join an array with spaces
 * @example
 * unwords([ 'foo', bar ]) // => 'foo bar'
 */

var unwords = function unwords(arr) {
  return arr.join(' ');
};

exports.default = unwords;