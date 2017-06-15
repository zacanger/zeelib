"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns true if any passes predicate
 * @param {function} predicate
 * @param {array} array of anything
 * @returns {boolean}
 */

var any = function any(f, a) {
  for (var i in a) {
    if (f(a[i]) === true) {
      return true;
    }
  }
  return false;
};

exports.default = any;