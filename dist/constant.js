"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Similar to `id` but takes another `any`
 * @example
 * constant(1)(() => {}) // => 1
 */

var constant = function constant(a /*: any*/) {
  return function (_ /*: any*/) {
    return a;
  };
};

exports.default = constant;