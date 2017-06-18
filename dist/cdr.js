"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `cdr`
 * @example
 * cdr([ 1, 2, 3, 4 ]) // => [ 2, 3, 4 ]
 */

var cdr = function cdr(arr /*: any[]*/) /*: any*/ {
  return arr.slice(1);
};

exports.default = cdr;