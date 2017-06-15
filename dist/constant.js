"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Similar to `id` but takes another `any`
 */

var constant = function constant(a /*: any*/) {
  return function (_ /*: any*/) {
    return a;
  };
};

exports.default = constant;