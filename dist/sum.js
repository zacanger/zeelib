"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Sum an array of numbers
 * @example
 * sum([ 1, 2, 3, 4 ]) // => 10
 */

var sum = function sum(nums /*: number[]*/) /*: number*/ {
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
};

exports.default = sum;