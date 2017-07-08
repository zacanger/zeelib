"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Get an object of items in an array with count
 * @example
 * countItemsInArray([ 1, 1, 2, 3, 4 ]) // => { '1': 2, '2': 1, '3': 1, '4': 1 }
 */

var countItemsInArray = function countItemsInArray(arr) {
  return arr.reduce(function (a, c) {
    a[c]++ ? 0 : a[c] = 1; // eslint-disable-line
    return a;
  }, {});
};

exports.default = countItemsInArray;