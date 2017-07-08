"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Similar to `id` but takes another `any`
 * @example
 * constant(1)(() => {}) // => 1
 */

var constant = function constant(a) {
  return function (_) {
    return a;
  };
};

exports.default = constant;