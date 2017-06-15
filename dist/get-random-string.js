"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns random string of n length (defaults to 8)
 */

var getRandomString = function getRandomString() /*: string*/ {
  var n /*: number*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  return Math.random().toString(36).substring(n);
};

exports.default = getRandomString;