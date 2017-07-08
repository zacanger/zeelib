"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes a sort fn and an array
 * Returns a sorted array
 * @example
 * const list = [ { id: 1 }, { id: 3 }, { id: 2 } ]
 * sortBy(({ id }) => id, list) // => [ { id: 1 }, { id: 2 }, { id: 3 } ]
 */

var sortBy = function sortBy /*:: <T>*/(f /*: (obj: T) => any*/, xs /*: Array<T>*/) /*: Array<T>*/ {
  return xs.sort(function (a, b) {
    return f(a) - f(b);
  });
};

exports.default = sortBy;