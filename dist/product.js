"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var product = function product(nums) {
  return nums.reduce(function (acc, curr) {
    return acc * curr;
  }, 1);
};

exports.default = product;