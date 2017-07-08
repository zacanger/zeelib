"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Takes a sort fn and an array
 * Returns a sorted array
 * @example
 * const list = [ { id: 1 }, { id: 3 }, { id: 2 } ]
 * sortBy(({ id }) => id, list) // => [ { id: 1 }, { id: 2 }, { id: 3 } ]
 */

var sortBy = function sortBy(f, xs) {
  return xs.sort(function (a, b) {
    return f(a) - f(b);
  });
};

exports.default = sortBy;