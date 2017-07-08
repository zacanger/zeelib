"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns current scroll position
 * @example
 * getScrollPosition() // => { scrollX: number, scrollY: number }
 */

var getScrollPosition = function getScrollPosition() {
  return { scrollX: window.scrollX, scrollY: window.scrollY };
};

exports.default = getScrollPosition;