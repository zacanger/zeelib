"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Reverses array, fast
 * @example
 * reverse([ 1, 2, 3 ]) // => [ 3, 2, 1 ]
 */

var reverse = function reverse(items /*: any[]*/) /*: any[]*/ {
  var result = [];
  for (var i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
};

exports.default = reverse;