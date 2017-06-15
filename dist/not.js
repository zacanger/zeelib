"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes a val and returns fn that takes a val and returns true
 * if the two are not the same
 */

var not = function not(a /*: any*/) {
  return function (b /*: any*/) /*: bool*/ {
    return a !== b;
  };
};

exports.default = not;