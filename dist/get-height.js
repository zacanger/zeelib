"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get height of window
 */

var getHeight = function getHeight() /*: number*/ {
  return window.innerHeight || window.document.documentElement.clientHeight;
};

exports.default = getHeight;