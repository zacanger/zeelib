"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if code is in Node
 * @example
 * isNode()
 */

var isNode = function isNode() {
  return process && !!process.version;
};

exports.default = isNode;