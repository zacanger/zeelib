"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Return true if any val in input array is true
 * @example
 * or([ 1, 2, 3 ]) // => false
 * or([ 1, 2, 3, true ]) // => true
 */

var or = function or(a) {
  var r = false;
  a.forEach(function (el) {
    if (el === true) {
      r = true;
    }
  });
  return r;
};

exports.default = or;