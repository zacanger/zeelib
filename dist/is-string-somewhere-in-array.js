"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the string is contained somewhere in the array
 * @example
 * isStringSomewhereInArray('a', [ 'asdf' ]) // => true
 */

var isStringSomewhereInArray = function isStringSomewhereInArray(el /*: string*/, arr /*: string[]*/) /*: bool*/ {
  return arr.some(function (a) {
    return el.toLowerCase().includes(a.toLowerCase()) || a.toLowerCase().includes(el.toLowerCase());
  });
};

exports.default = isStringSomewhereInArray;