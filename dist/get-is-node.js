"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if code is in Node
 * @example
 * getIsNode()
 */

var getIsNode = function getIsNode() /*: bool*/ {
  return process && !!process.version;
};

exports.default = getIsNode;