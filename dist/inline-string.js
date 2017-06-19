'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Turns all newlines into a single space
 * @example
 * inlineString('asdfasdf \n\n asdfasdf') // => 'asdfasdf asdfasdf'
 */

var inlineString = function inlineString(str /*: string*/) /*: string*/ {
  return str.replace(/(\r\n|\n|\r)/gm, ' ').replace(/[\s]+/gm, ' ');
};

exports.default = inlineString;