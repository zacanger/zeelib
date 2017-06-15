"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `indexOf`, here because of haskell's findIndex
 */

var findIndex = function findIndex(el /*: any*/, arr /*: any[]*/) /*: number*/ {
  return arr.indexOf(el);
};

exports.default = findIndex;