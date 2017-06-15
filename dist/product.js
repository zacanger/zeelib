"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the product of a list of numbers
 */

var product = function product(nums /*: number[]*/) /*: number*/ {
  return nums.reduce(function (acc, curr) {
    return acc * curr;
  }, 1);
};

exports.default = product;