"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns false if any in input array is false
 * @example
 * and([ 1, 2, 3 ]) // => true
 * and([ 1, 2, 3, false ]) // => false
 */

var and = function and(a) {
  var r = true;
  a.forEach(function (el) {
    if (el === false) {
      r = false;
    }
  });
  return r;
};

exports.default = and;