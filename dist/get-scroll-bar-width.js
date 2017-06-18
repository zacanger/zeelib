"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns the width of the brower's scrollbar
 * @example
 * getScrollBarWidth() // => 17
 */

var getScrollBarWidth = function getScrollBarWidth() /*: number*/ {
  return window.innerWidth - window.document.documentElement.clientWidth;
};

exports.default = getScrollBarWidth;