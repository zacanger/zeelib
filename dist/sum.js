"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var sum = function sum(nums) {
  return nums.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
};

exports.default = sum;