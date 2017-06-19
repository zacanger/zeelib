"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the value is a buffer
 * @example
 * isBuffer('asdf') // => false
 * isBuffer(Buffer.from('asdf')) // => true
 */

var isBuffer = function isBuffer(a /*: any*/) /*: bool*/ {
  try {
    return Buffer.isBuffer(a);
  } catch (_) {
    return false;
  }
};

exports.default = isBuffer;