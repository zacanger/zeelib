"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `indexOf`, here because of haskell's findIndex
 * @example
 * findIndex(1, [ 3, 2, 1 ]) // => 2
 */

var findIndex = function findIndex(el /*: any*/, arr /*: any[]*/) /*: number*/ {
  return arr.indexOf(el);
};

exports.default = findIndex;