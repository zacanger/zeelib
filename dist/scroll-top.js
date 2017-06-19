"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Scroll to the top
 * @example
 * scrollTop()
 */

var scrollTop = function scrollTop() /*: void*/ {
  return window.scrollTo(0, 0);
};

exports.default = scrollTop;