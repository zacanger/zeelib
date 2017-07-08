"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * `cdr`
 * @example
 * cdr([ 1, 2, 3, 4 ]) // => [ 2, 3, 4 ]
 */

var cdr = function cdr(arr) {
  return arr.slice(1);
};

exports.default = cdr;