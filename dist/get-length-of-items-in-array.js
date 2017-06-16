"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Find out how many of a given element is in an array
 */

var getLengthOfItemsInArray = function getLengthOfItemsInArray(el /*: any*/, arr /*: any[]*/) /*: number*/ {
  return arr.filter(function (a) {
    return a === el;
  }).length;
};

exports.default = getLengthOfItemsInArray;