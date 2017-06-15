"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the string is contained somewhere in the array
 */

var isStringSomewhereInArray = function isStringSomewhereInArray(arr /*: string[]*/, el /*: string*/) /*: bool*/ {
  return arr.some(function (a) {
    return el.toLowerCase().includes(a.toLowerCase()) || a.toLowerCase().includes(el.toLowerCase());
  });
};

exports.default = isStringSomewhereInArray;