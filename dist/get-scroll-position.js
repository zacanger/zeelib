"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns current scroll position
 * @example
 * getScrollPosition() // => { scrollX: number, scrollY: number }
 */

/*:: type S = {
  scrollX: number,
  scrollY: number
}*/
var getScrollPosition = function getScrollPosition() /*: S*/ {
  return { scrollX: window.scrollX, scrollY: window.scrollY };
};

exports.default = getScrollPosition;