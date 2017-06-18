"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `car` (same as `head`)
 * @example
 * car([ 1, 2, 3 ]) // => 1
 */

var car = function car(arr /*: any[]*/) /*: any*/ {
  return arr[0];
};

exports.default = car;