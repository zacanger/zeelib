"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get truthiness
 */

var toBool = function toBool(val /*: any*/) /*: bool*/ {
  return !!val;
};

exports.default = toBool;