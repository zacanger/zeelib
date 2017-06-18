"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if code is in Node
 * @example
 * isNode()
 */

var isNode = function isNode() /*: bool*/ {
  return process && !!process.version;
};

exports.default = isNode;