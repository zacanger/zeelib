'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Split a string on spaces
 * @example
 * words('foo bar') // => [ 'foo', 'bar' ]
 */

var words = function words(str) {
  return str.split(' ');
};

exports.default = words;