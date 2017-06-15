"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Log a value to console, and return that value
 */

var tap = function tap(msg /*: string*/) {
  return function /*:: <T>*/(a /*: T*/) /*: T*/ {
    console.log(msg, a);
    return a;
  };
};

exports.default = tap;