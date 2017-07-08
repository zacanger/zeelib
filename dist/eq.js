"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * `eq`
 * @example
 * eq(1, 1) // => true
 * eq({ a: 'b' }, { b: 'a' }) // => false
 */

var eq = function eq(a, b) {
  return a === b ? true : a === undefined || b === undefined ? false : JSON.stringify(a) === JSON.stringify(b);
};

exports.default = eq;