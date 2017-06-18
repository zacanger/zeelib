"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `toString`
 * @example
 * objectToString({}) // => '[object Object]'
 */

var objectToString = function objectToString(v /*: any*/) /*: string*/ {
  return Object.prototype.toString.call(v);
};

exports.default = objectToString;