'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Split a string on lines
 * @example
 * lines('foo\nbar') // => [ 'foo', 'bar' ]
 */

var lines = function lines(str) {
  return str.split('\n');
};

exports.default = lines;