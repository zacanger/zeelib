"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `decodeURI`, but safe
 */

var safeDecodeURI = function safeDecodeURI(str /*: string*/) /*: string*/ {
  try {
    return decodeURI(str);
  } catch (_) {
    return str;
  }
};

exports.default = safeDecodeURI;