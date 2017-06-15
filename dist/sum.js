"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Sum an array of numbers
 */

var sum = function sum(nums /*: number[]*/) /*: number*/ {
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
};

exports.default = sum;