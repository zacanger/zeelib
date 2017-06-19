"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `decodeURIComponent`, but safe
 * @example
 * safeDecodeURIComponent('20%2F%3F') // => '20/?'
 */

var safeDecodeURIComponent = function safeDecodeURIComponent(str /*: string*/) /*: string*/ {
  try {
    return decodeURIComponent(str);
  } catch (_) {
    return str;
  }
};

exports.default = safeDecodeURIComponent;