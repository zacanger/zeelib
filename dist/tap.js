"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Log a value to console, and return that value
 * @example
 * const logger = tap('This is the thing!')
 * logger(2) // => this is the thing 2 ; 2
 */

var tap = function tap(msg /*: string*/) {
  return function /*:: <T>*/(a /*: T*/) /*: T*/ {
    console.log(msg, a);
    return a;
  };
};

exports.default = tap;