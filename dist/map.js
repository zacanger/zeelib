"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `map`
 * @example
 * map(increment, [ 1, 2, 3 ]) // => [ 2, 3, 4 ]
 */

var map = function map(fn /*: () => any*/, arr /*: ?any[]*/) /*: any*/ {
  if (arr === undefined) {
    return function (h) {
      return map(fn, h);
    };
  }

  var ix = -1;
  var len = arr && arr.length || 0;
  var toReturn = Array(len);

  while (++ix < len) {
    if (arr) {
      toReturn[ix] = fn(arr[ix]);
    }
  }

  return toReturn;
};

exports.default = map;