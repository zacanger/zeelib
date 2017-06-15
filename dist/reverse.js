"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Reverses array, fast
 */

var reverse = function reverse(items /*: any[]*/) /*: any[]*/ {
  var result = [];
  for (var i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
};

exports.default = reverse;