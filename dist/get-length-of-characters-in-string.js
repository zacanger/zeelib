'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Find out how many of a given character is in a string
 * @example
 * getLengthOfCharactersInString('a', 'aaa') // => 3
 */

var getLengthOfCharactersInString = function getLengthOfCharactersInString(el /*: string*/, str /*: string*/) /*: number*/ {
  return str.split('').filter(function (c) {
    return c === el;
  }).length;
};

exports.default = getLengthOfCharactersInString;