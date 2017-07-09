"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var countItemsInArray = function countItemsInArray(arr) {
  return arr.reduce(function (a, c) {
    a[c]++ ? 0 : a[c] = 1;
    return a;
  }, {});
};

exports.default = countItemsInArray;