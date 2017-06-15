"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get an object of items in an array with count
 */

var countItemsInArray = function countItemsInArray(arr /*: any[]*/) /*: Object*/ {
  return arr.reduce(function (a, c) {
    a[c]++ ? 0 : a[c] = 1; // eslint-disable-line
    return a;
  }, {});
};

exports.default = countItemsInArray;