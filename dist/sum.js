"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Sum an array of numbers
 * @example
 * sum([ 1, 2, 3, 4 ]) // => 10
 */

var sum = function sum(nums) {
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
};

exports.default = sum;