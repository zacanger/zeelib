"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Get the product of a list of numbers
 * @example
 * product([ 1, 2, 3, 4 ]) // => 24
 */

var product = function product(nums) {
  return nums.reduce(function (acc, curr) {
    return acc * curr;
  }, 1);
};

exports.default = product;