"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the smallest from an array of numbers
 */

var minimum = function minimum(nums /*: number[]*/) /*: number*/ {
  return Math.min.apply(Math, nums);
};

exports.default = minimum;