"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Reverse the sign on a number
 * @example
 * reverseSign(-10) // => 10
 */

var reverseSign = function reverseSign(num /*: number*/) /*: number*/ {
  return -num;
};

exports.default = reverseSign;