"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * `indexOf`, here because of haskell's findIndex
 * @example
 * findIndex(1, [ 3, 2, 1 ]) // => 2
 */

var findIndex = function findIndex(el, arr) {
  return arr.indexOf(el);
};

exports.default = findIndex;