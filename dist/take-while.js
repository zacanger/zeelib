"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns elements that pass predicate,
 * until failure (ignores matches after failure)
 */

var takeWhile = function takeWhile(pred /*: () => bool*/, arr /*: any[]*/) /*: any[]*/ {
  var a1 = [];
  arr.forEach(function (el) {
    if (pred(el)) {
      a1.push(el);
    } else {
      return a1;
    }
  });
  return a1;
};

exports.default = takeWhile;