"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns the width of the brower's scrollbar
 * @example
 * getScrollBarWidth() // => 17
 */

var getScrollBarWidth = function getScrollBarWidth() {
  return window.innerWidth - window.document.documentElement.clientWidth;
};

exports.default = getScrollBarWidth;