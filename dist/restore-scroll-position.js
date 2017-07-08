"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Restore scroll position to coordinates
 * @example
 * restoreScrollPosition({ scrollX: 0, scrollY: 100 })
 */

var restoreScrollPosition = function restoreScrollPosition(_ref) {
  var scrollX = _ref.scrollX,
      scrollY = _ref.scrollY;
  return window.scrollTo(scrollX, scrollY);
};

exports.default = restoreScrollPosition;