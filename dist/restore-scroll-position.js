"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Restore scroll position to coordinates
 * @example
 * restoreScrollPosition({ scrollX: 0, scrollY: 100 })
 */

/*:: type s = {
  scrollX: number,
  scrollY: number
}*/
var restoreScrollPosition = function restoreScrollPosition(_ref) {
  var scrollX = _ref.scrollX,
      scrollY = _ref.scrollY;
  return window.scrollTo(scrollX, scrollY);
};

exports.default = restoreScrollPosition;