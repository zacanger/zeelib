"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `eq`
 */

var eq = function eq(a /*: any*/, b /*: any*/) /*: bool*/ {
  return a === b ? true : a === undefined || b === undefined ? false : JSON.stringify(a) === JSON.stringify(b);
};

exports.default = eq;