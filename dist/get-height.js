"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get height of window
 * @example
 * getHeight()
 */

var getHeight = function getHeight() /*: number*/ {
  return window.innerHeight || window.document.documentElement.clientHeight;
};

exports.default = getHeight;