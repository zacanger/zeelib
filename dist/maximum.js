"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the largest number from an array
 * @example
 * maximum([ 1, 2, 3, 4, 5 ]) // => 5
 */

var maximum = function maximum(nums /*: number[]*/) /*: number*/ {
  return Math.max.apply(Math, nums);
};

exports.default = maximum;