"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Make a pair out of any two values
 * @example
 * pair('a', 'b') // => [ 'a', 'b' ]
 */

var pair = function pair(first /*: any*/, second /*: any*/) /*: any[]*/ {
  return [first, second];
};

exports.default = pair;