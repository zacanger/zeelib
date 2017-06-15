"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the value is a buffer
 */

var isBuffer = function isBuffer(a /*: any*/) /*: bool*/ {
  try {
    return Buffer.isBuffer(a);
  } catch (_) {
    return false;
  }
};

exports.default = isBuffer;