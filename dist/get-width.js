"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get window width
 * @example
 * getWidth()
 */

var getWidth = function getWidth() /*: number*/ {
  return window.innerWidth || window.document.documentElement.clientWidth;
};

exports.default = getWidth;