"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns false if any in input array is false
 */

var and = function and(a /*: any[]*/) /*: bool*/ {
  var r = true;
  a.forEach(function (el) {
    if (el === false) {
      r = false;
    }
  });
  return r;
};

exports.default = and;