'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Split a string on spaces
 * @example
 * words('foo bar') // => [ 'foo', 'bar' ]
 */

var words = function words(str /*: string*/) /*: string[]*/ {
  return str.split(' ');
};

exports.default = words;