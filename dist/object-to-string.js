"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * `toString`
 * @example
 * objectToString({}) // => '[object Object]'
 */

var objectToString = function objectToString(v) {
  return Object.prototype.toString.call(v);
};

exports.default = objectToString;