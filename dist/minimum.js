"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Get the smallest from an array of numbers
 * @example
 * minimum([ 1, 2, 3, 4, 5 ]) // => 1
 */

var minimum = function minimum(nums) {
  return Math.min.apply(Math, nums);
};

exports.default = minimum;