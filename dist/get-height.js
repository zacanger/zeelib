"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Get height of window
 * @example
 * getHeight()
 */

var getHeight = function getHeight() {
  return window.innerHeight || window.document.documentElement.clientHeight;
};

exports.default = getHeight;