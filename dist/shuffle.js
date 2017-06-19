"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Randomly shuffle items in array
 * @example
 * shuffle([ 1, 2, 3, 4 ])
 */

var shuffle = function shuffle(arr /*: any[]*/) /*: any[]*/ {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

exports.default = shuffle;