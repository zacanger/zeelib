"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Get the largest number from an array
 * @example
 * maximum([ 1, 2, 3, 4, 5 ]) // => 5
 */

var maximum = function maximum(nums) {
  return Math.max.apply(Math, nums);
};

exports.default = maximum;